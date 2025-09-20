select sum(ex.amount) from expenses ex 
where ex.purpose = 'Rent' and ex.user_id in (
	select u.user_id from user u 
    inner join expenses e on u.user_id = e.user_id
);