const nodemailer = require("nodemailer");
const sesTransport = require("nodemailer-ses-transport");
require("dotenv").config();
const transporter = nodemailer.createTransport(
  sesTransport({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
  })
);

module.exports = {
  sendIncomeStatement: (req, res, next) => {
    console.log("NODEMAILER:", req.body);
    console.log(process.env.ADMIN_EMAIL);
    const {
      email,
      salary,
      federaltax,
      statetax,
      sideincome,
      rent,
      mortgage,
      car,
      gas,
      water,
      healthcare,
      school,
      food,
      restaurants,
      clothes,
      gym,
      entertainment,
      travel,
      monthlyincome,
      monthlyexpenses,
      monthlynetincome,
      monthlynetpercent
    } = req.body;
    transporter
      .sendMail({
        from: process.env.ADMIN_EMAIL,
        to: email,
        subject: `Income Statement Summary - Ridley`,
        text: `Congrats on building your income statement! We are glad to have you with us. Thanks for using our app. Below is a copy of your information.
        salary: ${salary},
        federaltax: ${federaltax},
        statetax: ${statetax},
        sideincome: ${sideincome},
        rent: ${rent},
        mortgage: ${mortgage},
        car: ${car},
        gas: ${gas},
        water: ${water},
        healthcare: ${healthcare},
        school: ${school},
        food: ${food},
        restaurants: ${restaurants},
        clothes: ${clothes},
        gym: ${gym},
        entertainment: ${entertainment},
        travel: ${travel},
        monthlyincome: ${monthlyincome},
        monthlyexpenses: ${monthlyexpenses},
        monthlynetincome: ${monthlynetincome},
        monthlynetpercent: ${monthlynetpercent}`
        // html: "<b>Hello Helloooooo, text or html. only one shows </b>"
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }

  // Post MVP
  // sendRetirementPlan: (req, res, next) => {
  //   console.log(req.body);
  //   const { first_name, user_email, message } = req.body;

  //   transporter
  //     .sendMail({
  //       From: `${process.env.ADMIN_EMAIL}`,
  //       To: user_email,
  //       subject: `Retirement Plan Summary - Ridley`,
  //       text: `Planning `
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       res.status(500).send(err);
  //     });
  // }
};
