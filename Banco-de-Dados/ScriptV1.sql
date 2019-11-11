/* Criando a tabela Cliente com os campos conforme listados no backlog */
create table Cliente (
idCliente int primary key auto_increment,
nomeCliente varchar(45),
telefoneCliente char(11),
senha varchar(16),
email varchar(100),
CNPJ char(14)
);
GO

/* Criando a tabela Sensor*/
create table Sensor (
idSensor int primary key auto_increment,
nomeSensor varchar(20)
);
GO

/* Criando a tabela Carteira de Habilitação*/
create table CarteiraHabilitacao (
idCNH int primary key auto_increment,
numeroCNH char(11),
categoriaCNH char(1),
check (categoriaCNH = 'b' or sexo = 'e'),
dataEmissao date,
dataValidade date
);
GO

/* Criando a tabela Motorista */
create table Motorista (
idMotorista int primary key auto_increment,
nomeMotorista varchar(45),
dataNascMotorista date,
enderecoMotorista varchar(255),
sexoMotorista char(1),
check (sexo = 'm' or sexo = 'f' or sexo = 'n'),
telefoneMotorista char(11),
/* Criando a coluna fkCNH sendo uma chave estrangeira que referencia a tabela CarteiraHabilitacao e sua chave primária(idCNH) */
fkCNH int,
foreign key (fkCNH) references CarteiraHabilitacao(idCNH)
);
GO

/* Criando a tabela Caminhao */
create table Caminhao (
idCaminhao int primary key auto_increment,
placa char(7),
/* Criando a coluna fkCliente sendo uma chave estrangeira que referencia a tabela Cliente e sua chave primária(idCliente) */
fkCliente int,
foreign key (fkCliente) references Cliente(idCliente),
/* Criando a coluna fkSensor sendo uma chave estrangeira que referencia a tabela Sensor e sua chave primária(idSensor) */
fkSensor int,
foreign key (fkSensor) references Sensor(idSensor)
);
GO

/* Criando a tabela associativa entre Caminhao_Motorista (Relação N:N) */
create table Caminhao_Motorista (
/* Criando a coluna fkCaminhao sendo uma chave estrangeira que referencia a tabela Caminhao e sua chave primária(idCaminhao) */
fkCaminhao int,
foreign key (fkCaminhao) references Caminhao(idCaminhao),
/* Criando a coluna fkMotorista sendo uma chave estrangeira que referencia a tabela Motorista e sua chave primária(idMotorista) */
fkMotorista int,
foreign key (fkMotorista) references Motorista(idMotorista),
/* Declarando as duas chaves estrangeiras que criamos acima como a chave primaria composta dessa tabela */
primary key (fkCaminhao, fkMotorista)
);
GO

/* Criando a tabela Leitura*/
create table Leitura (
idLeitura int primary key auto_increment,
temperatura int,
umidade int,
dataEventos datetime,
/* Criando a coluna fkSensor sendo uma chave estrangeira que referencia a tabela Sensor e sua chave primária(idSensor) */
fkSensor int,
foreign key (fkSensor) references Sensor(idSensor)
);
GO
