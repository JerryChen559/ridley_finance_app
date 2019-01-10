SELECT *
FROM purchasecards
WHERE user_id = $1
ORDER BY importance;