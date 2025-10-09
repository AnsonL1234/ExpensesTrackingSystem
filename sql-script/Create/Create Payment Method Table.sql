create table payment_method (
	payment_method_id int auto_increment not null primary key,
    user_id int not null, 
    payment_type varchar(25), 
    foreign key (user_id) references user(user_id)
);