create table card_cash (
	card_cash_id varchar(36) not null primary key, 
    payment_method_id int, 
    card_type varchar(25), 
    card_number bigint, 
    card_cash_amount double not null, 
    issues_organization varchar(25),
    issues_countries varchar(50), 
    foreign key (payment_method_id) references payment_method(payment_method_id)
);