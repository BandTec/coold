create database Cadastro_clientes;
use Cadastro_clientes;
create table Clientes (
idCliente int primary key auto_increment,
Nome varchar(100),
Email varchar(100),
Email_alternativo varchar(100),
Senha varchar(20),
Telefone varchar(14)
);
insert into Clientes values (null,'João Marcos','joaomarcos@bandtec.com.br','joaomarcos2@bandtec.com,br','123456','(11) 912345678');
select * from Clientes;
insert into Clientes values (null,'Gabriel Ribeiro','gabrielribeiro@bandtec.com.br','gabrielribeiro2@bandtec.com.br',0987654,'(11) 909876543');
insert into Clientes values (null,'Gabriel Ribeiro','gabrielribeiro@bandtec.com.br','gabrielribeiro2@bandtec.com.br','0987654','(11) 909876543');