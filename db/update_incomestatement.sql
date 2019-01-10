UPDATE fire_app_user
SET salary = $2, 
federaltax = $3, 
statetax = $4, 
sideincome = $5, 
rent = $6,
mortgage = $7, 
car = $8,
gas = $9,
water = $10, 
healthcare = $11,
school = $12,
food = $13,
restaurants = $14,
clothes = $15,
gym = $16,
entertainment = $17,
travel = $18,
monthlyexpenses = $19,
monthlyincome = $20,
monthlynetincome = $21,
monthlynetpercent = $22
WHERE auth_id = $1;

SELECT *
FROM fire_app_user;