import express from "express";

const app = express();
const puerto = 8080;

app.get('/', (req, res) => {
    console.log('hola desde express');

    const numero_1 = 10;
    const numero_2 = 20;

    res.send(`Hola desde raiz ${numero_1 + numero_2 +100}`);
});

app.get('/saludo', (req, res) => {
    console.log('hola desde express');
    res.json({
        nombre: 'Mariano',
        apellido: 'Macias',
        edad: 33,
        mail: 'mariano@mail.com',
    });
});

app.listen(puerto, () => console.log(`Servidor escuchando en el ${puerto}`));