// Creación De Rutas

// Variables Y Constantes
const ExpressAuxiliar = require('express');

// Inicializar Router
const RouterAuxiliar = ExpressAuxiliar.Router();

// Conexion Base De Datos
const OracleDB = require('../Connection/Connection.js');

// Pagina Principal
RouterAuxiliar.get('/', (req, res) => {
	
	var Query = "insert into usuarios(codigo) values(10)";
	
	// Solicitar Peticion
	OracleDB.ConnectionDatabaseQuery(Query, {}, { autoCommit: true })
	
    .then(function(Resultado) {
		
        console.log(Resultado);
		res.send(Resultado);
    
	})
	
    .catch(function(Error) {
		
        console.log(Error);
		res.send(Error);
    
	});
	
});

// Exportar Modulo
module.exports = RouterAuxiliar;