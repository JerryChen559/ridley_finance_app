UPDATE purchasecards
SET itemname = $2, 
price = $3, 
importance = $4
WHERE purchasecardid = $1;

SELECT *
FROM purchasecards
WHERE purchasecardid = $1;