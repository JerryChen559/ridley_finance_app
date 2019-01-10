
-- CREATE TABLE fire_app_user
-- (
--   user_id serial PRIMARY KEY NOT NULL,
--   salary FLOAT NOT NULL,
--   federaltax FLOAT,
--   statetax FLOAT,
--   sideincome FLOAT,
--   rent FLOAT,
--   mortgage FLOAT,
--   car FLOAT,
--   gas FLOAT,
--   water FLOAT,
--   healthcare FLOAT,
--   school FLOAT,
--   food FLOAT,
--   restaurants FLOAT,
--   clothes FLOAT,
--   gym FLOAT,
--   entertainment FLOAT,
--   travel FLOAT,
--   monthlyexpenses FLOAT,
--   monthlyincome FLOAT,
--   monthlynetincome FLOAT,
--   age integer,
--   asset FLOAT,
--   fire FLOAT,
--   monthcount FLOAT,
--   yearcount FLOAT
-- );

-- CREATE TABLE nestEgg
-- (
--   user_id integer REFERENCES fire_app_user (user_id) NOT NULL,
--   datecreated TIMESTAMP NOT NULL DEFAULT now(),
--   depositemergency FLOAT,
--   depositretirement FLOAT,
--   flowercount integer
-- );

-- CREATE TABLE purchaseCards
-- (
--   user_id INTEGER REFERENCES fire_app_user (user_id) NOT NULL,
--   purchasecardid serial NOT NULL,
--   itemname TEXT,
--   price FLOAT,
--   importance integer,
--   note VARCHAR(255)
-- );


-------------
--join to get all users and purchase card items

-- SELECT * 
-- FROM purchasecards p
-- JOIN fire_app_user f
-- ON p.itemname = f.user_id;