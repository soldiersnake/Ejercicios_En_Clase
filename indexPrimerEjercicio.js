// Importar Moment.js
const moment = require('moment');

// La fecha actual
const fechaActual = moment();

// La fecha de nacimiento - remplaza esto con tu fecha de nacimiento real
const fechaNacimiento = moment('1989-11-23', 'YYYY-MM-DD');

// Validar que la fecha de nacimiento es válida
if (!fechaNacimiento.isValid()) {
  console.log('La fecha de nacimiento no es válida.');
} else {
  // Calcular la diferencia en días
  const diasVividos = fechaActual.diff(fechaNacimiento, 'days');
  console.log('----------------');
  console.log(`Has vivido ${diasVividos} días.`);
  console.log('----------------');
}

// Código extra para manejar el cambio de versión (esto es solo un ejemplo, no ejecutar)
// const momentVersionAntigua = require('moment@1.6.0');
// Intenta realizar las mismas operaciones con la versión antigua y observa los cambios.
