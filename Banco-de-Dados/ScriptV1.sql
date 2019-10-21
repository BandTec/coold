create table Cliente (
idCliente int primary key auto_increment,
nome varchar(255),
telefone varchar(14),
senha varchar(255),
email varchar(100),
CNPJ varchar(18)
);

create table Caminhao (
idCaminhao int primary key auto_increment,
placa varchar(255),
capacidadeCarga int,
fkCliente int,
foreign key (fkCliente) references Cliente(idCliente),
fkSensor int,
foreign key (fkSensor) references Sensor(idSensor)
);

create table Motorista (
idMotorista int primary key auto_increment,
nome varchar(255),
dataNasc date,
endereco varchar(255),
sexo char(1),
check (sexo = 'm' or sexo = 'f'),
telefone varchar(14)
);

create table Caminhao_Motorista (
fkCaminhao int,
foreign key (fkCaminhao) references Caminhao(idCaminhao),
fkMotorista int,
foreign key (fkMotorista) references Motorista(idMotorista),
primary key (fkCaminhao, fkMotorista)
);

create table CarteiraHabilitacao (
idCNH int primary key auto_increment,
numeroCNH varchar(11),
categoriaCNH char(1),
check (categoriaCNH = 'b' or sexo = 'e'),
dataEmissao date,
dataValidade date,
fkMotorista int,
foreign key (fkMotorista) references Motorista(idMotorista)
);

create table Sensor (
idSensor int primary key auto_increment,
temperatura int,
umidade int
);

create table Eventos (
idEventos int primary key auto_increment,
dataEventos date,
horaEventos time,
fkSensor int,
foreign key (fkSensor) references Sensor(idSensor)
);
