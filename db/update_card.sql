UPDATE purchasecards
SET itemname = $2,
note = $3, 
price = $4, 
importance = $5
WHERE purchasecardid = $1;

SELECT *
FROM purchasecards
WHERE purchasecardid = $1;