import {
    crearCarta,
    crearDeck,
    pedirCarta,
    turnoComputadora,
    valorCarta
} from './usecases/index'

const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0,
    puntosComputadora = 0,
    deck = [];

const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo"),
    divCartasJugador = document.querySelector("#divCartasJugador"),
    divCartasComputadora = document.querySelector("#divCartasComputadora"),
    puntosHTML = document.querySelectorAll("small");

deck = crearDeck(tipos, especiales);

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    puntosJugador += valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;
    const imgCarta = crearCarta(carta);
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        console.warn("Lo siento mucho, perdiste");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    } else if (puntosJugador === 21) {
        console.warn("21, genial!");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
});

btnNuevo.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = "";
    divCartasJugador.innerHTML = "";
    btnPedir.disabled = false;
    btnDetener.disabled = false;
});



