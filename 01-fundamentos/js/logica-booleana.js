const retornaTrue = () => {
    return true;
}

console.log(retornaTrue());

console.log('===== Negacion ======');
console.log(true);
console.log(!true);
console.log(false);
console.log(!false);
console.log(!retornaTrue());

console.log('AND');
console.log(true && true);
console.log(true && false); 
console.log(false && true); 
console.log(false && false); 
console.log(!false && !!true);
console.log(retornaTrue() && retornaTrue());
console.log(!retornaTrue() && !retornaTrue());

console.log('OR');
console.log(true || true);
console.log(true || false); 
console.log(false || true); 
console.log(false || false); 
console.log(!false || !!true);
console.log(retornaTrue() || retornaTrue());
console.log(!retornaTrue() || !retornaTrue());

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && false && true;
const a5 = false || undefined || retornaTrue() || 'Ya no soy falso again' || true;
console.log({a1});
console.log({a2});
console.log({a5});



