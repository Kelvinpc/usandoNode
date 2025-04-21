CREATE DATABASE node;

USE node;

CREATE TABLE persona(
id					INT auto_increment PRIMARY KEY,
nombre 				VARCHAR(30),
apellido_PAT 		VARCHAR(30) NOT NULL,
apellido_MAT		VARCHAR(30) NOT NULL,
edad				INT NOT NULL,
dni					INT NOT NULL,
telefono 			INT NOT NULL
)ENGINE = INNODB;

INSERT INTO persona(nombre,apellido_PAT,apellido_MAT,edad,dni,telefono) value ("RICARDO", "ALMENDRAS","ABAD", 24,235235,9347535);
;