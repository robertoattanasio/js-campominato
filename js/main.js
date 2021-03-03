btnStartGame = document.getElementById('startGame');
btnNumberSend = document.getElementById('numberSend');
gameItem = document.getElementsByClassName('gameItem');

btnStartGame.addEventListener('click', function() {
    for (i = 0; i < gameItem.length; i++) {
        gameItem[i].innerHTML = '<i class="fas fa-question-circle"></i>';
        gameItem[i].className = 'gameItem';
    }

    document.getElementById('risultatiFinali').innerHTML = 'Buona Partita!';

    numeriComputer = [];
    numeriUtente = [];
    counter = 1;
    var sceltaDifficolta = document.getElementById('difficolta').value;

    switch (sceltaDifficolta) {
        case 'facile':
            livello = 100;
            document.getElementById('numberGame').setAttribute("max", livello);
            break;
        case 'medio':
            livello = 80;
            document.getElementById('numberGame').setAttribute("max", livello);
            break;
        case 'difficile':
            livello = 50;
            document.getElementById('numberGame').setAttribute("max", livello);
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
})

btnNumberSend.addEventListener('click', function() {
    var stageNumber = parseInt(document.getElementById('numberGame').value);

    if (((stageNumber < 0)) || (stageNumber > livello) || (isNaN(stageNumber))) {
        alert('Hai inserito un numero fuori dal range consentito dal tuo livello.');


    } else if (numeriUtente.includes(stageNumber)) {
        alert('Non fare il furbetto, non vale scrivere lo stesso numero!');

    } else if (numeriComputer.includes(stageNumber)) {
        gameItem[counter - 1].innerHTML = stageNumber;
        document.getElementById('risultatiFinali').innerHTML = 'Mi dispiace ma hai perso, ti sei fermato al livello ' + counter + '.';
        gameItem[counter - 1].className = 'gameItem violet';

    } else {
        numeriUtente.push(stageNumber);
        gameItem[counter - 1].innerHTML = stageNumber;
        counter += 1;

        if ((counter - 1) == numeriComputer.length) {
            document.getElementById('risultatiFinali').innerHTML = 'Hai vinto con un totale di ' + (counter - 1) + ' caselle conquistate!';
        }

    }
})

// FUNZIONE PER GENERATE NUMBER, LIVELLO COME ARGOMENTO
function randomNumber(number) {
    return parseInt(Math.floor((Math.random() * number)));
}