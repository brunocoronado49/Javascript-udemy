/**
 * 
 * @param {String} carta  // path de la imagen de la carta
 * @returns {HTMLImageElement} imgCarta // imagen de la carta
 */
export const crearCarta = (carta) => {
    if (!carta) throw new Error('La carta es obligatoria');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    return imgCarta;
}


