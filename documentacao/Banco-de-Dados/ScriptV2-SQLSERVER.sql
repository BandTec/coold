/* Criando a tabela Cliente com os campos conforme listados no backlog */
create table Cliente (
idCliente int primary key identity(1,1),
nomeCliente varchar(45),
telefoneCliente char(11),
senha varchar(16),
email varchar(45),
CNPJ char(14)
);
GO

/* Criando a tabela Sensor*/
create table Sensor (
idSensor int primary key identity(1,1),
nomeSensor varchar(20)
);
GO

/* Criando a tabela Supervisor */
create table Supervisor (
idSupervisor int primary key identity(1,1),
nomeSupervisor varchar(45),
emailSupervisor varchar(45),
telefoneSupervisor char(11)
);
GO

/* Criando a tabela Caminhao */
create table Caminhao (
idCaminhao int primary key identity(1,1),
placa char(7),
/* Criando a coluna fkCliente sendo uma chave estrangeira que referencia a tabela Cliente e sua chave primária(idCliente) */
fkCliente int,
foreign key (fkCliente) references Cliente(idCliente),
/* Criando a coluna fkSensor sendo uma chave estrangeira que referencia a tabela Sensor e sua chave primária(idSensor) */
fkSensor int,
foreign key (fkSensor) references Sensor(idSensor),
/* Criando a coluna fkSupervisor sendo uma chave estrangeira que referencia a tabela Supervisor e sua chave primária(idSupervisor) */
fkSupervisor int,
foreign key (fkSupervisor) references Supervisor(idSupervisor)
);
GO

/* Criando a tabela Leitura*/
create table Leitura (
idLeitura int primary key identity(1,1),
temperatura int,
umidade int,
dataLeituras datetime,
/* Criando a coluna fkSensor sendo uma chave estrangeira que referencia a tabela Sensor e sua chave primária(idSensor) */
fkSensor int,
foreign key (fkSensor) references Sensor(idSensor)
);
GO
