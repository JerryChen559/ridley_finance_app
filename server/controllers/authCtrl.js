const { DOMAIN, CLIENT_ID, CLIENT_SECRET, REACT_APP_CLIENT } = process.env;
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

module.exports = app => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new Auth0Strategy(
      {
        domain: DOMAIN,
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: "/login",
        scope: "openid"
      },
      (_, __, ___, profile, done) => {
        console.log("passport.use", profile);
        done(null, profile);
      }
    )
  );

  // users log in. new users get added to the db
  passport.serializeUser((user, done) => {
    console.log("session user:", user);
    // console.log(`"profile:" ${JSON.stringify(user)}`);
    const db = app.get("db");

    db.get_user(user.id)
      .then(user2 => {
        if (!user2[0]) {
          db.add_user(user.id)
            .then(response => {
              console.log(`added profile: ${response}`);
              return done(null, response[0]);
            })
            .catch(err => console.log(err));
        } else {
          console.log("user2 exists as:", user2[0].auth_id);
          console.log("user2[0]:", user2[0]);
          return done(null, user2[0]);
        }
      })
      .catch(err => done(err, null));
  });

  passport.deserializeUser((user, done) => {
    console.log("deserializeUser", user, done);
    return done(null, user);
  });
  // passport.deserializeUser((profile, done) => done(null, profile));

  app.get(
    "/login",
    passport.authenticate("auth0", {
      successRedirect: `${REACT_APP_CLIENT}/incomestatement`,
      failureRedirect: "/login"
    })
  );
  app.get("/success", (req, res) => {
    res.status(200).json(req.user);
  });

  const logout = (req, res) => {
    req.session.destroy(() => {
      res.redirect(REACT_APP_CLIENT);
    });
  };
  app.get("/logout", logout);
};
