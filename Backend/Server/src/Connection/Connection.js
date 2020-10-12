// Conexion Con Base De Datos

// Solicitar Mysql
const OracleDBAuxiliar = require('oracledb');

// Solicitar Credenciales
const { Credenciales } = require('./Keys');

// Release Base De Datos
const ReleaseDatabase = function(Connection) {
	
	// Release Base De Datos
	Connection.release(function (Error) {
		
		// Verificar Si Hay Error
		if (Error) {
			
			console.log(Error.message);
			
		}

  });
  
};

// Array Querys Database
function ConnectionDatabase(Query, Params, Options) {
	
    // Retornar Promesa
    return new Promise(function(Resolve, Reject) {
		
		// Crear Connection
        OracleDBAuxiliar.getConnection(Credenciales)
		
        .then(function(Connection) {
			
			// Ejecutar Query
			Connection.execute(Query, Params, Options)
			
            .then(function(Resultados) {
				
                Resolve(Resultados);
				
                process.nextTick(function() {
					
                    ReleaseDatabase(Connection);
                
				});
            })
			
            .catch(function(Error) {
				
                Reject(Error);
 
                process.nextTick(function() {
					
                    ReleaseDatabase(Connection);
                    
					});
                    
					});
            })
			
            .catch(function(Error) {
				
                Reject(Error);
            
			});
    });
}

// Object Querys Database
function ConnectionDatabaseQuery(Query, Params, Options) {
	
	// Options
    Options['outFormat'] = OracleDBAuxiliar.OBJECT;
    return ConnectionDatabase(Query, Params, Options);
}

// Exports
module.exports = ConnectionDatabase; 
module.exports.ConnectionDatabase = ConnectionDatabase; 
module.exports.ConnectionDatabaseQuery = ConnectionDatabaseQuery;