require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor Express
const app = express();

// Configurar CORS
app.use( cors() );

// para iniciar el servidor debo poner en Gitbash "npm run start:dev"

// Base de datos
dbConnection();

console.log( process.env );

// Rutas
app.get( '/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });
});


app.listen(process.env.PORT, () => {
    console.log('Servidor escuchando en el puerto ' + process.env.PORT);
});