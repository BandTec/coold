create table Dados_sensor (
idSensor int primary key auto_increment,
nome_produto varchar(40),
data_produto date,
box_produto varchar(255),
dados varchar(40)
);
insert into Dados_sensor values (null,'Tomate','2019-09-01','23','12ºC / 90%');
select * from Dados_sensor;
