CREATE DATABASE  `burger_db`;
USE `burger_db`;

DROP TABLE burger;

CREATE TABLE `burgers`(
`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
`burger_namer` VARCHAR( 255) NOT NULL,
`devoured` BOOLEAN NOT NULL,
`date` DATETIME NOT NULL,
PRIMARY KEY (`id`));