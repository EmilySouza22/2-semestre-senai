CREATE DATABASE crud_aula;
USE crud_aula;

CREATE TABLE cliente(
	id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    endereco VARCHAR(100),
    telefone VARCHAR(100)
);