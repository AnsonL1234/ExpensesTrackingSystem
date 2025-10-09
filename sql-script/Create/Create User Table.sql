create table user (
	user_id int auto_increment not null primary key,
    username varchar(25) not null, 
    `password` varchar(50) not null,
    `status` varchar(10) not null,
    create_at datetime not null, 
    update_at datetime
);