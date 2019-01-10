INSERT INTO nestegg
  (user_id, depositretirement)
VALUES
  ($1, $2);

SELECT *
FROM nestegg
WHERE user_id = $1;