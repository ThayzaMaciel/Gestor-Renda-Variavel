CREATE TABLE `operations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`asset_id` int NOT NULL,
	`operation_type` varchar(50) NOT NULL,
	`quantity` decimal(10,2) NOT NULL,
	`price_per_unit` decimal(10,2) NOT NULL,
	`brakerage_free` decimal(5,4) NOT NULL,
	`timestamp` datetime NOT NULL,
	CONSTRAINT `operations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `position` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`asset_id` int NOT NULL,
	`quantity` decimal NOT NULL,
	`average_price` decimal(10,2) NOT NULL,
	`pnl` decimal(10,2) NOT NULL,
	CONSTRAINT `position_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `quotes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`asset_id` int NOT NULL,
	`unit_price` decimal(10,2) NOT NULL,
	`timestamp` datetime NOT NULL,
	CONSTRAINT `quotes_id` PRIMARY KEY(`id`)
);
