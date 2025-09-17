create table expenses(
	expenses_id int auto_increment not null primary key, 
    user_id int not null, 
    amount double not null, 
    purpose varchar(25) not null, 
    spend_at timestamp not null
);