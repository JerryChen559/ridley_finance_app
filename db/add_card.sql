INSERT INTO purchasecards
  (user_id)
VALUES
  ($1);

SELECT *
FROM purchasecards
WHERE user_id = $1
ORDER BY importance;