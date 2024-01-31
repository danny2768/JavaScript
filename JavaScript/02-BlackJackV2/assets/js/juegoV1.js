/**
 * 2C = Two of Clubs (Treboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Picas)
 */
(() => {
    'use strict'

    let deck = [];
    const suits = ['C', 'D', 'H', 'S'],
          faceCards = ['J', 'Q', 'K', 'A'];

    let playerPoints = 0,
        computerPoints = 0;

    // Referencias html

    const btnNuevo = document.querySelector('#btnNuevo'),
          btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener');

    const divCardsPlayer = document.getElementById('jugador-cartas'),
          divCardsComputer = document.getElementById('computadora-cartas');

    let pPoints = document.getElementById('playerPoints'),
        cPoints = document.getElementById('computerPoints');



    // @ Esta funcion crea una nueva baraja mezclada.
    const crearDeck = () => {

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

        deck = _.shuffle(deck);
        // console.log(deck);

        return deck
    }

    crearDeck();

    // @ Esta funcion me permite tomar una carta de la baraja
    const pedirCarta = () => {

        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }

        const carta = deck.pop();
        // console.log(deck);
        // console.log(carta);
        return carta
    }

    const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;
    }

    // @ Eventos

    // * Turno Computadora
    const turnoComputadora = (minimumPoints) => {

        do {
            const carta = pedirCarta();

            computerPoints += valorCarta(carta);
            cPoints.innerHTML = computerPoints;

            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`
            imgCarta.classList.add('carta');
            divCardsComputer.append(imgCarta);

            if (minimumPoints > 21) {
                break;
            }

        } while ((computerPoints <= minimumPoints) && (computerPoints <= 21));

        setTimeout(() => {

            if (minimumPoints === computerPoints) {
                alert('Nadie gana.')
            } else if (minimumPoints > 21) {
                alert('La computadora gana.')
            } else if (computerPoints > 21) {
                alert('Jugador gana.')
            } else {
                alert('Computadora gana.')
            }

        }, 55);




    }

    // * Pedir Carta Jugador
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();

        playerPoints += valorCarta(carta);
        pPoints.innerHTML = playerPoints;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`
        imgCarta.classList.add('carta');
        divCardsPlayer.append(imgCarta);

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
        turnoComputadora(playerPoints);
    })

    btnNuevo.addEventListener('click', () => {
        
        console.clear()
        deck = [];
        deck = crearDeck();

        playerPoints = 0;
        computerPoints = 0;

        divCardsPlayer.innerHTML = '';
        divCardsComputer.innerHTML = '';

        pPoints.innerHTML = 0;
        cPoints.innerHTML = 0;

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    })

})();
