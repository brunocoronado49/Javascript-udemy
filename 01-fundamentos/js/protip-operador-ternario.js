const fecha = new Date();
const dia = fecha.getDay();
const mes = fecha.getMonth();

let mensaje;

mensaje = (dia === 6 && mes === 10) ? 'Feliz cumpleaños!' : 'No es tu cumple.';
console.log({mensaje});




