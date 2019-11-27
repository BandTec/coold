'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Leitura = sequelize.define('Leitura',{	
		idLeitura: {
			field: 'idLeitura',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		temperatura: {
			field: 'temperatura',
			type: DataTypes.REAL,
			allowNull: false
		},
		umidade: {
			field: 'umidade',
			type: DataTypes.REAL,
			allowNull: false
		},
		dataLeitura: {
			field: 'dataLeitura',
			type: DataTypes.DATE,
			allowNull: false
		},
		fkSensor: {
			field: 'fkSensor',
			type: DataTypes.INTEGER,
            references: 'sensor',
            referencesKey: 'idSensor'
		},
		momento_grafico: {
			type: DataTypes.VIRTUAL, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		}
	}, 
	{
		tableName: 'leitura', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Leitura;
};
