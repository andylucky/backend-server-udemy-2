// Requires

var express = require("express");

var mongoose = require("mongoose")

// Inicializar variables
var app = express();


//conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/holspitalDB', (err, res) => {

    if (err) throw err;

    console.log(res)

})


app.get('/', function(req, res, next) {
    //res --> respuesta del servido a cualquier usuario que haga una solicitud
    res.status(200).json({
        ok: true,
        mensaje: "peticion realizada correctamente"
    });
});

// escuchar peticiones
app.listen('3000', () => {
    console.log("espress server puerto 3000 online")

})