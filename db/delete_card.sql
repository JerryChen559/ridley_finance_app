DELETE FROM purchasecards
WHERE purchasecardid = $2;

SELECT *
FROM purchasecards
WHERE user_id = $1
ORDER BY importance;