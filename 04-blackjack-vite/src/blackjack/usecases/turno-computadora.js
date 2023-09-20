import {crearCarta, pedirCarta, valorCarta} from './index'

/**
 * 
 * @param {Number} puntosMin puntos para ganar
 * @param {HTMLElement} puntosHtml renderiza los cambios
 * @param {HTMLElement} divCartasPC crea la carta
 * @param {Array<String>} deck muestra el deck
 */
export const turnoComputadora = (puntosMin, puntosHtml, divCartasPC, deck = []) => {
    if (!puntosMin) throw new Error('Puntos minimos requeridos.');
    if (!puntosHtml) throw new Error('Puntos html requeridos.');
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora += valorCarta(carta);
        puntosHtml.innerText = puntosComputadora;
        const imgCarta = crearCarta(carta);
        divCartasPC.append(imgCarta);

        if (puntosMin > 21) break;
    } while ((puntosComputadora < puntosMin) && (puntosMin <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMin) {
            alert('Es un EMAPTE!');
        } else if ((puntosMin > 21) || (puntosComputadora <= 21)) {
            alert('Femputadora GANA, a morir por SNUSNU!')
        } else if ((puntosComputadora > 21) || (puntosMin <= 21)) {
            alert('Jugador GANA, arriba el patriarcado!!!');
        }
    }, 1000);
}


