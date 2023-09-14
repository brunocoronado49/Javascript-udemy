// funcion autoinbocada - patron modulo
const modulo = (() => {
    'use strict';

    //! referencias al html
    const btnPedir = document.querySelector('#btnPedir'), 
        btnDetener = document.querySelector('#btnDetener'), 
        puntosHTML = document.querySelectorAll('small'), 
        divCartasJugadores = document.querySelectorAll('#divCartas');

    let deck = [],
        puntosJugadores = [];

    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'K', 'Q', 'J'];

    const inicializarJuego = (numeroJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];

        for (let i = 0; i < numeroJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnDetener.disabled = false;
        btnPedir.disabled = false;
    }

    //! creando baraja nueva
    const crearDeck = () => {
        deck = [];
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

        return _.shuffle(deck);
    }

    //! tomando una carta del final de la baraja
    const pedirCarta = () => {
        if (deck.length === 0) throw 'No hay cartas en el deck';
        return deck.pop();
    }

    //! darle valor a las cartas
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        // revisa si es un numero y si no lo convierte a number
        return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1;
    }

    //! acumulando puntos
    const acumularPuntos = (turno, carta) => {
        puntosJugadores[turno] += valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    //! crear carta el dom
    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    //! determinando ganador
    const determinarGanador = () => {
        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

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

    //! eventos del html, computadora
    // turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            const turnoComputadora = puntosJugadores.length - 1;
            puntosComputadora = acumularPuntos(turnoComputadora, carta);
            crearCarta(carta, turnoComputadora);
        } while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador();
    }

    //! eventos del html, jugador
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(0, carta);
        crearCarta(carta, 0);

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

    //! evento detener juego
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    });

    return {
        startGame: inicializarJuego
    };
})();

