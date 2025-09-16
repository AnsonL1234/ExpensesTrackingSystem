create table profile (
	profile_id int auto_increment not null primary key, 
    user_id int not null, 
    firstname varchar(25) not null, 
    surname varchar(25) not null, 
    dob date not null, 
    email_address varchar(50) not null, 
    address1 varchar(50), 
    address2 varchar(50), 
    address3 varchar(50), 
    city varchar(50), 
    town varchar(50), 
    aircode varchar(10),
    foreign key (user_id) references user(user_id)
);