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
INSERT IGNORE INTO bhut.usuario ( email, senha, nome) VALUES ('tiago@teste.com', '123456', 'tiago');
INSERT IGNORE INTO bhut.usuario ( email, senha, nome) VALUES ('teste@bhut.com', '123456', 'bhut');
INSERT IGNORE INTO bhut.carro ( marca, ano, modelo, cor, combustivel, valor) VALUES ( 'POLO', '2000', 'gm', 'prata', 'gasolina', '5.000,00');
INSERT IGNORE INTO bhut.carro ( marca, ano, modelo, cor, combustivel, valor) VALUES ( 'Gol', '2010', 'GW', 'brancco', 'alcool', '22.000,00');
COMMIT;



