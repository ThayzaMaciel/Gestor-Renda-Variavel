CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`percentual_corretagem` float NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
