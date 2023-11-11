const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tp46"
});
 
conexion.connect(function(err) 
{
   if (err) throw err;
        console.log("Se conectó correctamente a la base de datos");

        app.post('/imprimir', (req, res) => {
            const { dni, nombre, apellido, fechaNacimiento, nacionalidad, mejorObra, anioPublicacion, edadEnPublicacion } = req.body;
        
            const sql = 'INSERT INTO autores (dni, nombre, apellido, fechaNacimiento, nacionalidad, mejorObra, anioPublicacion, edadEnPublicacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            conexion.query(sql, [dni, nombre, apellido, fechaNacimiento, nacionalidad, mejorObra, anioPublicacion, edadEnPublicacion], (err, result) => {
                if (!err) res.json({ success: true });
            });
        });

app.get('/argentinos', (req, res) => {
    const sql = 'SELECT * FROM autores WHERE nacionalidad = "argentino" || nacionalidad = "argentina"';
    conexion.query(sql, (err, results) => {
        if (!err) res.json(results);
    });
});

app.get('/publicados', (req, res) => {
    const sql = 'SELECT * FROM autores WHERE anioPublicacion BETWEEN 1960 AND 1980';
    conexion.query(sql, (err, results) => {
        if (!err) res.json(results);
    }); 
});

app.get('/mostrarTodo', (req, res) => {
    const sql = 'SELECT * FROM autores';
    conexion.query(sql, (err, results) => {
        if (!err) res.json(results);
    }); 
});

app.get('/promedio', (req, res) => {
    const sql = 'SELECT AVG(edadEnPublicacion) AS num FROM autores';
    conexion.query(sql, (err, results) => {
        if (!err) res.json(results);
    });
});

app.delete('/eliminar', (req, res) => {
    const { dni } = req.body;
    const sql = 'DELETE FROM autores WHERE dni=?';
    conexion.query(sql, [dni], (err, results) => {
        if (err) res.status(500).json({ error: 'Error del servidor' });
    });
});

app.get('/mostrarRegistro/:dni', (req, res) => {
    const { dni } = req.params;
    const sql = `SELECT * FROM autores WHERE dni = ?`;
    conexion.query(sql, [dni], (err, result) => {
       if (!err)res.json(result);
    });
 });

app.put('/modificar/:dni', (req, res) => {
    const {dni} = req.params;
    const {nNombre, nApellido, nFechaNacimiento, nNacionalidad, nMejorObra, nAnioPublicacion, nEdadEnPublicacion} = req.body;
    const sql = 'UPDATE autores SET nombre=?, apellido=?, fechaNacimiento=?, nacionalidad=?, mejorObra=?, anioPublicacion=?, edadEnPublicacion=? WHERE dni=?';
    conexion.query(sql, [nNombre, nApellido, nFechaNacimiento, nNacionalidad, nMejorObra, nAnioPublicacion, nEdadEnPublicacion, dni], (err, results) => {
        if (!err) res.json(results);
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
});

app.listen(app.get('port'), ()=>{
    console.log('El servidor está funcionando');
});
