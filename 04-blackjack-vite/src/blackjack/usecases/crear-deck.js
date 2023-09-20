import { shuffle } from 'underscore';

/**
 * 
 * @param {Array<String>} cartasNormales // cartas normales ["C", "D", "H", "S"]
 * @param {Array<String>} cartasEspeciales // cartas especiales ["A", "J", "Q", "K"]
 * @returns {Array<String>} // retorna un nuevo deck
 */
export const crearDeck = (cartasNormales, cartasEspeciales) => {
    if (!cartasNormales || cartasNormales.length === 0)
        throw new Error('Cartas normales es obligatorio (string[])');
    if (!cartasEspeciales || cartasEspeciales.length === 0)
        throw new Error('Cartas especiales es obligatorio (string[])');

    let deck = [];

    // manejo de cartas normales
    for (let i = 2; i <= 10; i++) {
        for (let tipo of cartasNormales) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of cartasNormales) {
        for (let especial of cartasEspeciales) {
            deck.push(especial + tipo);
        }
    }

    return shuffle(deck);
}



