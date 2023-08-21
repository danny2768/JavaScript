/**
 * 2C = Two of Clubs (Treboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Picas)
 */
const modulo = (() => {
    'use strict'

    let deck = [];
    const suits = ['C', 'D', 'H', 'S'],
          faceCards = ['J', 'Q', 'K', 'A'];

    let puntosJugadores = [];

    // Referencias html
    const btnNuevo = document.querySelector('#btnNuevo'),
          btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');

    // @ Esta funcion inicializa el juego.
    const inicializarJuego = ( numJugadores = 2 ) => {
        
        deck = crearDeck();
        puntosJugadores = [];

        for( let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0)

        }
        
        puntosHTML.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerText = '' );
            
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    // @ Esta funcion crea una nueva baraja mezclada.
    const crearDeck = () => {

        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (let suit of suits) {
                deck.push(i + suit);
            }
        }
        for (let faceCard of faceCards) {
            for (let suit of suits) {
                deck.push(faceCard + suit);
            }
        }

        return _.shuffle( deck );
    }

    // @ Esta funcion me permite tomar una carta de la baraja
    const pedirCarta = () => {

        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }

        return deck.pop();
    }

    // @ Esta funcion sirve para obtener el valor de cada carta.
    const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;
    }

    // * Turno: 0 = primer jugador y el ultimo sera de la computadora.
    const acumularPuntos = ( carta, turno ) => {
        
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];

        return puntosJugadores[turno];
    }

    const crearCarta = ( carta, turno ) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);

    }

    const determinarGanador = () => {
        
        setTimeout(() => {
            
            const [ minimumPoints, computerPoints] = puntosJugadores;
            
            if (computerPoints === minimumPoints) {
                alert('Nadie gana.')
            } else if (minimumPoints > 21) {
                alert('La computadora gana.')
            } else if (computerPoints > 21) {
                alert('Jugador gana.')
            } else {
                alert('Computadora gana.')
            }

        }, 100);

    }

    // * Turno Computadora
    const turnoComputadora = (minimumPoints) => {
        
        let computerPoints = 0;

        do {
            const carta = pedirCarta();
            computerPoints = acumularPuntos(carta, puntosJugadores.length - 1);

            crearCarta( carta, puntosJugadores.length - 1 );
            

        } while ((computerPoints < minimumPoints) && (minimumPoints <= 21));

        determinarGanador();
    }

    // * Pedir Carta Jugador
    btnPedir.addEventListener('click', () => {
        
        const carta = pedirCarta();
        const playerPoints = acumularPuntos(carta, 0);
        
        crearCarta( carta, 0);
        

        if (playerPoints > 21) {
            console.warn('Lo siento, has perdido.');
            btnPedir.disabled = true;
            btnDetener.disabled = true;

            turnoComputadora(playerPoints);
        } else if (playerPoints === 21) {
            console.warn('Genial!, has ganado.');
            btnPedir.disabled = true;
            btnDetener.disabled = true;

            turnoComputadora(playerPoints);
        }
    })


    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora( puntosJugadores[0]);
    })

    // btnNuevo.addEventListener('click', () => {
        
    //     inicializarJuego();

    // })


    return {
        nuevoJuego: inicializarJuego
    };
    
})();