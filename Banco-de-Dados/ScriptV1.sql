/* Criando a tabela Cliente com os campos conforme listados no backlog */
create table Cliente (
idCliente int primary key auto_increment,
nome varchar(50),
telefone varchar(14),
senha varchar(16),
email varchar(100),
CNPJ varchar(18)
);

/* Criando a tabela Sensor*/
create table Sensor (
idSensor int primary key auto_increment,
temperatura int,
umidade int
);

/* Criando a tabela Motorista */
create table Caminhao (
idCaminhao int primary key auto_increment,
placa varchar(7),
estado char(2),
capacidadeCarga int,
/* Criando a coluna fkCliente sendo uma chave estrangeira que referencia a tabela Cliente e sua chave primária(idCliente) */
fkCliente int,
foreign key (fkCliente) references Cliente(idCliente),
/* Criando a coluna fkSensor sendo uma chave estrangeira que referencia a tabela Sensor e sua chave primária(idSensor) */
fkSensor int,
foreign key (fkSensor) references Sensor(idSensor)
);

/* Criando a tabela Motorista */
create table Motorista (
idMotorista int primary key auto_increment,
nome varchar(50),
dataNasc date,
endereco varchar(255),
sexo char(1),
check (sexo = 'm' or sexo = 'f'),
telefone varchar(14)
);

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

/* Criando a tabela Carteira de Habilitação*/
create table CarteiraHabilitacao (
idCNH int primary key auto_increment,
numeroCNH varchar(11),
categoriaCNH char(1),
check (categoriaCNH = 'b' or sexo = 'e'),
dataEmissao date,
dataValidade date,
/* Criando a coluna fkMotorista sendo uma chave estrangeira que referencia a tabela Motorista e sua chave primária(idMotorista) */
fkMotorista int,
foreign key (fkMotorista) references Motorista(idMotorista)
);

/* Criando a tabela Eventos*/
create table Eventos (
idEventos int primary key auto_increment,
dataEventos date,
horaEventos time,
/* Criando a coluna fkSensor sendo uma chave estrangeira que referencia a tabela Sensor e sua chave primária(idSensor) */
fkSensor int,
foreign key (fkSensor) references Sensor(idSensor)
);
