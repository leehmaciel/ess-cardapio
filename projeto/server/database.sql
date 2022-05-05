CREATE SCHEMA `cardapio`;

CREATE TABLE `cardapio`.`item` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `description` VARCHAR(200) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `cardapio`.`category` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
