// Creación Servidor

// Variables Y Constantes
const ExpressAuxiliar = require('express');
const MorganAuxiliar = require('morgan');
const BodyParser = require('body-parser');
const MethodOverride = require('method-override');

// Inicializar Aplicacion
const MainAplication = ExpressAuxiliar();

// Definir Puerto
MainAplication.set('port', process.env.PORT || 5556);

//Mostrar Peticiones En Consola
MainAplication.use(MorganAuxiliar('dev'));
MainAplication.use(BodyParser.urlencoded({extended: false}));
MainAplication.use(BodyParser.json());
MainAplication.use(MethodOverride());
MainAplication.set('json spaces', 2);

//Routes
MainAplication.use(require('./Routes'));

// Inicializar Aplicacion
MainAplication.listen(MainAplication.get('port'), () => {
	
	// Mensaje De Verificacion
	console.log("Servidor Escuchando En Puerto:", MainAplication.get('port'));	
	
}); 