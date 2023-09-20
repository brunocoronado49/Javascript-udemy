/**
 * 
 * @param {Array<String>} deck // deck nuevo creado
 * @returns {String} carta // string de carta tomada del deck
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.lengtgh === 0)
        throw new Error('No hay cartas en el deck');

    return deck.pop();
}


