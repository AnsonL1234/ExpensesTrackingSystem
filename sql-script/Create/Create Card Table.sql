create table card (
	card_id varchar(36) not null primary key, 
    payment_method_id int not null, 
    card_type varchar(25), 
    card_number int not null, 
    card_amount double not null, 
    issues_organization varchar(25) not null,
    issues_countries varchar(50), 
    foreign key (payment_method_id) references payment_method(payment_method_id)
);