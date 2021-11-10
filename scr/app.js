// inicializo los modulos
const express = require ('express');
const app = express();
const path = require ('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require ('express-myconnection');



$conexion = mysqli_connect( $servidor, $usuario, "" );

// rutas importadas
const rutasVuelos = require('./routes/vuelos');
app.use('/', rutasVuelos);


//funciones
app.use(morgan('dev')); // me informa de los pedidos al servidor

app.use(function myconnection() {

$usuario = "root";
$contrasena = "";  
$servidor = "027.7.1";
$basededatos = "bat5";

},


/*
app.use(myConnection(mysql, {

    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'bat5',

},'single'));
*/

app.use(express.urlencoded({extended: false}))); //formulario


// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// ajustes
app.set('port',process.env.PORT || 3001);
app.set('view engiene','ejs');
app.set('views', path.join(__dirname,'views'))


// pongo el servidor en puerto
app.listen(app.get('port'),() => {

    console.log('servidor en puerto 3000');

});