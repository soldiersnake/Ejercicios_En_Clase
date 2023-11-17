import express from "express";

const app = express();
app.use(express.json()); // Asegúrate de usar express.json() para poder manejar JSON en el body de las peticiones POST y PUT
app.use(express.urlencoded({ extended: true })); // Para manejar URL encoded data

const puerto = 8080;

// Frase inicial
let frase = "Frase inicial";

// GET '/api/frase': devuelve un objeto que como campo 'frase' contenga la frase completa
app.get("/api/frase", (req, res) => {
  res.json({ frase });
});

// GET '/api/palabras/:pos': devuelve un objeto que como campo 'buscada' contenga la palabra hallada en la frase en la posición dada
app.get("/api/palabras/:pos", (req, res) => {
  const pos = parseInt(req.params.pos);
  const palabras = frase.split(" ");
  if (pos > 0 && pos <= palabras.length) {
    res.json({ buscada: palabras[pos - 1] });
  } else {
    res.status(404).send("Posición fuera de rango");
  }
});

// POST '/api/palabras': recibe una palabra y la agrega al final de la frase
app.post("/api/palabras", (req, res) => {
  const { palabra } = req.body;
  if (palabra) {
    frase += ` ${palabra}`;
    res.json({ agregada: palabra, pos: frase.split(" ").length });
  } else {
    res.status(400).send("No se proporcionó una palabra válida");
  }
});

// PUT '/api/palabras/:pos': recibe una palabra y reemplaza en la frase aquella hallada en la posición dada
app.put("/api/palabras/:pos", (req, res) => {
  const pos = parseInt(req.params.pos);
  const { palabra } = req.body;
  let palabras = frase.split(" ");

  if (palabra && pos > 0 && pos <= palabras.length) {
    const anterior = palabras[pos - 1];
    palabras[pos - 1] = palabra;
    frase = palabras.join(" ");
    res.json({ actualizada: palabra, anterior });
  } else {
    res.status(400).send("Posición fuera de rango o palabra no proporcionada");
  }
});

// DELETE '/api/palabras/:pos': elimina una palabra en la frase según la posición dada
app.delete("/api/palabras/:pos", (req, res) => {
  const pos = parseInt(req.params.pos);
  let palabras = frase.split(" ");

  if (pos > 0 && pos <= palabras.length) {
    
    // palabras = palabras.filter((_, index) => index !== pos - 1); // borrado con metodo filter
    palabras.splice(pos - 1, 1); // borrado con metodo splice
    frase = palabras.join(" ");
    res.json({ eliminada: pos, frase });
  } else {
    res.status(404).send("Posición fuera de rango");
  }
});

app.listen(puerto, () =>
  console.log(`Servidor escuchando en el puerto ${puerto}`)
);
