import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true})) // para que funcione la data que llegue de query entre otras funciones de envio y recepcion de datos
const puerto = 8080;

const usuarios = [
    {nombre : 'Mariano', edad: 33, id: 1},
    {nombre : 'Guille', edad: 40, id: 2},
    {nombre : 'Andrea', edad: 33, id: 3},
    {nombre : 'Ramon', edad: 23, id: 4},
    {nombre : 'Antonella', edad: 21, id: 5},
]

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

app.get('/dataPorParams/:data', (req, res) => { //localhost:8080/dataPorParams/NOMBRE_A_ESCRIBIR
    const data = req.params.data;
    console.log('Data :', data);
    res.send(`Bienvenido a la web ${data}, tu nombre me llego por Params`)
});

app.get('/busquedaUsuarioPorParamsPorID/:id', (req, res) => { //localhost:8080/dataPorParams/NOMBRE_A_ESCRIBIR
    
    // 1ER tomo los datos por parametro
    const id = req.params.id;
    console.log('el Id es :', id); //muestro por consola

    //Busco el usuario
    const encontrado = usuarios.find((user) => user.id == id);

    // si lo encuentro lo muestro sino doy mensaje de no encontrado
    if(encontrado){
        res.json(encontrado)
    }else{
        res.send('No se encontro el usuario');
    }
});

app.get('/dataPorQuery',(req, res) => { //localhost:8080/dataPorQuery?nombre=mariano&apellido=macias   (en el ejemplo vea se divide la ruta contra las variables con ? y se agrega variables con &)
    const nombre = req.query.nombre;
    const apellido = req.query.apellido
    res.send(`Bienvenido a la web ${nombre}, ${apellido}, tu nombre me llego por Query`)
});

app.listen(puerto, () => console.log(`Servidor escuchando en el ${puerto}`));