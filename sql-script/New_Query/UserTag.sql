SELECT firstname, surname, email_address
FROM profile pf 
JOIN user u on u.user_id = pf.user_id 
WHERE pf.user_id = 'UIDA1F3C4E9B23CDEF1';