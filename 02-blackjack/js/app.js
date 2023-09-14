// referencias al html
const btnPedir = document.querySelector('#btnPedir');
const btnNuevo = document.querySelector('#btnNuevo');
const btnDetener = document.querySelector('#btnDetener');
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

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
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        console.log('GANASTE');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
});


// turno de la computadora
const turnoComputadora = (puntosMinimos) => {
    do {
        // sacando la carta y asignando su valor
        const carta = pedirCarta();
        puntosComputadora += valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        // creando la imagen y asignando sus estilos
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) break;
    } while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Es un EMAPTE!');
        } else if ((puntosMinimos > 21) || (puntosComputadora <= 21)) {
            alert('Femputadora GANA, a morir por SNUSNU!')
        } else if ((puntosComputadora > 21) || (puntosMinimos <= 21)) {
            alert('Jugador GANA, arriba el patriarcado!!!');
        }
    }, 1000);

    
}

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click', () => {
    deck = [];
    crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerText = puntosJugador;
    puntosHTML[1].innerText = puntosComputadora;
    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;
});


