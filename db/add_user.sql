INSERT INTO fire_app_user
  (auth_id)
VALUES
  ($1);

SELECT *
FROM fire_app_user
WHERE auth_id = $1;