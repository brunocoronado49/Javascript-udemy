/**
 * 
 * @param {String} carta nombre de la carta creada
 * @returns valor de la carta en base a su nombre
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === 'A') ? 11 : 10 : valor * 1;
}


