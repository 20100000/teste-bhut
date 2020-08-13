-- schema.sql
CREATE DATABASE IF NOT EXISTS bhut;
USE bhut;
CREATE TABLE IF NOT EXISTS carro
(
    id          int auto_increment
        primary key,
    marca       varchar(50) not null,
    ano         varchar(10) null,
    modelo      varchar(50) null,
    cor         varchar(60) null,
    combustivel varchar(20) null,
    valor       varchar(20) null
);

CREATE TABLE IF NOT EXISTS usuario
(
    id    int auto_increment
        primary key,
    email varchar(100) not null,
    senha varchar(100) not null,
    nome  varchar(150) null,
    constraint usuario_email_uindex
        unique (email)
);

INSERT INTO bhut.usuario (id, email, senha, nome) VALUES (1, 'tiago@teste.com', '123456', 'tiago');
INSERT INTO bhut.usuario (id, email, senha, nome) VALUES (2, 'teste@bhut.com', '123456', 'bhut');

INSERT INTO bhut.carro (id, marca, ano, modelo, cor, combustivel, valor) VALUES (2, 'POLO', '2000', 'gm', 'prata', 'gasolina', '5.000,00');
INSERT INTO bhut.carro (id, marca, ano, modelo, cor, combustivel, valor) VALUES (3, 'Gol', '2010', 'GW', 'brancco', 'alcool', '22.000,00');


