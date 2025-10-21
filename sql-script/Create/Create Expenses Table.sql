create table expenses(
	expenses_id varchar(36) null primary key, 
    user_id varchar(36) not null, 
    payment_method_id int not null,
    amount double not null, 
    purpose varchar(25) not null, 
    spend_at varchar(50) not null,
    spend_time timestamp not null,
    foreign key (user_id) references user(user_id), 
    foreign key (payment_method_id) references payment_method(payment_method_id)
);