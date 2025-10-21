create table profile (
	profile_id int auto_increment not null primary key, 
    user_id varchar(36) not null, 
    firstname varchar(25) not null, 
    surname varchar(25) not null, 
    dob date not null, 
    email_address varchar(50) not null,
    phone_number bigint not null,
    image_url varchar(255), 
    address1 varchar(50), 
    address2 varchar(50), 
    address3 varchar(50), 
    city varchar(50), 
    town varchar(50), 
    postcodeexpenses varchar(10),
    foreign key (user_id) references user(user_id)
);