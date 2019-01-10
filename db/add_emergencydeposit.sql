INSERT INTO nestegg
  (user_id, depositemergency)
VALUES
  ($1, $2);

SELECT *
FROM nestegg
WHERE user_id = $1;