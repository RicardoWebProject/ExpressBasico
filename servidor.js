let express = require('express');
let app = express();

const pug = require('pug');

app.use(express.static( __dirname + '/public'));

app.get('/', (peticion, response) => {
    response.render('index.pug', {
        titulo: 'HOME'
    });
})

app.get('/estudiantes', (peticion, respuesta) => {
    respuesta.render('estudiantes.pug', {
        titulo: 'Estudiantes'
    });
});

app.get('/administradores', (peticion, respuesta) => {
    respuesta.render('administradores.pug', {
        titulo: 'Admins'
    });
});

app.get('/info', (peticion, respuesta) => {
    respuesta.render('info.pug', {
        titulo: 'Info'
    });
});

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000.');
});