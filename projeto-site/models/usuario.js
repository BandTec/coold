'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idCliente: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeCliente: {
			type: DataTypes.STRING,
			allowNull: false
		},
		telefoneCliente: {
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		CNPJ: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		fkSensor: {
			type: DataTypes.INTEGER,
              references: 'sensor',
              referencesKey: 'idSensor'
		}
	}, 
	{
		tableName: 'cliente', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
