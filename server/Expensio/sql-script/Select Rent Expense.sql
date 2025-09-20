select * from expenses e 
where e.purpose = 'Rent' and e.user_id in (
	select u.user_id from user u
    inner join expenses ex on u.user_id = ex.user_id 
);