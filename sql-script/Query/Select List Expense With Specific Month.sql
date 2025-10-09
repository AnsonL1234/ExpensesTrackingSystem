select * from expenses ex
where month(ex.spend_at) = 1 and ex.user_id in (
	select u.user_id from user u 
    inner join expenses e on u.user_id = e.user_id 
    where u.user_id = 1
);