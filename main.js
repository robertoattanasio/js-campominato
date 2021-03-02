btnStartGame = document.getElementById('startGame');
gameItem = document.getElementsByClassName('gameItem');
for (i = 0; i < gameItem.length; i++) {
    gameItem[i].innerHTML = '<i class="fas fa-question-circle"></i>';
}

btnStartGame.addEventListener('click', function() {
    for (i = 0; i < gameItem.length; i++) {
        gameItem[i].innerHTML = '<i class="fas fa-question-circle"></i>';
    }

    var numeriComputer = [];
    var numeriUtente = [];
    var sceltaDifficolta = document.getElementById('difficolta').value;

    switch (sceltaDifficolta) {
        case 'facile':
            livello = 100;
            break;
        case 'medio':
            livello = 80;
            break;
        case 'difficile':
            livello = 50;
            break;
    }

    for (i = 0; i < 16; i++) {
        var generateNumber = randomNumber(livello);
        // STATE INTERMEDIO PER EVITARE DUPLICATI
        if (numeriComputer.includes(generateNumber)) {
            i -= 1;
        } else {
            // PUSH NELL'ARRAY
            numeriComputer.push(generateNumber);
        }
    }

    console.log(numeriComputer);

    for (i = 1; i <= numeriComputer.length; i++) {
        // INSERIMENTO TRAMITE PROMPT 
        var numeroInserito = parseInt(prompt('Dimmi un numero.'));

        // STATE DI CONTROLLO DEI VALORI IN INGRESSO E POSSIBILE USCITA DAL LOOP 
        if (((numeroInserito < 0)) || (numeroInserito > livello) || (isNaN(numeroInserito))) {
            document.getElementById('results').innerHTML = 'Hai inserito un numero fuori dal range consentito dal tuo livello. Ricomincia da capo.';

            break;
        }
        if (numeriUtente.includes(numeroInserito)) {
            document.getElementById('results').innerHTML = 'Non fare il furbetto, non vale scrivere lo stesso numero! Ricomincia da capo e sii onesto.';
            break;
        }

        numeriUtente.push(numeroInserito);
        // console.log(numeriUtente);


        // STATO DI SCONFITTA
        if (numeriComputer.includes(numeroInserito)) {
            document.getElementById('results').innerHTML = 'Mi dispiace ma hai perso, ti sei fermato al livello ' + i + '.';
            break;
        }

        // STATO FINALE IN CASO DI VITTORIA
        if (i == numeriComputer.length) {
            document.getElementById('results').innerHTML = 'Complimenti, hai vinto tu. Hai superato ' + numeriComputer.length + ' livelli!';
            document.getElementsByClassName('game_item').innerHTML = '<i class="fas fa-thumbs-up"></i>';

        }
    }
})




// FUNZIONE PER GENERATE NUMBER, LIVELLO COME ARGOMENTO
function randomNumber(number) {
    return parseInt(Math.floor((Math.random() * number)));
}