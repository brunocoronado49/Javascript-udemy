// referencias al html
const btnPedir = document.querySelector('#btnPedir');
const btnNuevo = document.querySelector('#btnNuevo');
const btnDetener = document.querySelector('#btnDetener');
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'K', 'Q', 'J'];
let puntosJugador = 0;
let puntosComputadora = 0;

// creando baraja nueva
const crearDeck = () => {
    // inrgeso de tipos de cartas comunes
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    
    // ingreso de tipos de cartas especiales
    for(let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo);
        }
    }

    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}
crearDeck();

// tomando una carta del final de la baraja
const pedirCarta = () => {
    if (deck.length === 0) throw 'No hay cartas en el deck';
    const carta = deck.pop();
    return carta;
}
pedirCarta();

// darle valor a las cartas
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    // revisa si es un numero y si no lo convierte a number
    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1;

}
valorCarta('4C');

// eventos del html
btnPedir.addEventListener('click', () => {
    // sacando la carta y asignando su valor
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    // creando la imagen y asignando sus estilos
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    // evaluar los puntos del jugador
    if (puntosJugador > 21) {
        console.error('lo siento mucho, has perdido.');
        btnPedir.disabled = true;
    } else if (puntosJugador === 21) {
        console.warn('GANASTE');
        btnPedir.disabled = true;
    }
});


