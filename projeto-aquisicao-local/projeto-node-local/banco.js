var desenvolvimento = false;

var configuracoes = {
    producao: {
        server: "srvgrupocoold.database.windows.net",
        user: "usercoold",
        password: "#Gfgrupo8",
        database: "bdcoold",
        options: {
            encrypt: true
        },
        // pool é o período de tempo que leva para a aplicação node ae conectar ao banco.
        pool: {
            max: 4,
            min: 1,
            idleTimeoutMillis: 30000,
            connectionTimeout: 5000
        }
    },
    desenvolvimento: {
        server: "BASETESTE.database.windows.net",
        user: "usuariotestes",
        password: "senhatestes",
        database: "BASETESTE",
        options: {
            encrypt: true
        }
    }
}
 
var sql = require('mssql');
sql.on('error', err => {
    console.error(`Erro de Conexão: ${err}`);
});

var perfil = desenvolvimento ? 'desenvolvimento' : 'producao';

function conectar() {
  sql.close();
  // "return" é a função que retorna os dados de acordo com os comandos executados
  return sql.connect(configuracoes[perfil])
} 

module.exports = {
    conectar: conectar,
    sql: sql
}
