DELETE FROM nestegg
WHERE depositid = $2;

SELECT *
FROM nestegg
WHERE user_id = $1;