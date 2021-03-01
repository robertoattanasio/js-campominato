var numeriComputer = [];
var numeriUtente = [];
var difficolta = parseInt(prompt('Definisci una difficoltà dandomi un numero tra 1, 2 o 3.'));
var livello = 0;

switch (difficolta) {
    case 1:
        livello = 100;
        break;
    case 2:
        livello = 80;
        break;
    case 3:
        livello = 50;
        break;
    default:
        alert('Hai inserito un livello errato, per questo giocherai al massimo della difficoltà.')
        livello = 100;
}


for (i = 0; i < 16; i++) {
    var generateNumber = Math.floor((Math.random() * livello));
    // STATE INTERMEDIO PER EVITARE DUPLICATI
    if (numeriComputer.includes(generateNumber)) {
        i -= 1;
    } else {
        // PUSH NELL'ARRAY
        numeriComputer.push(parseInt(generateNumber));
    }
}

console.log(numeriComputer);

for (i = 1; i <= numeriComputer.length; i++) {
    // INSERIMENTO TRAMITE PROMPT 
    var numeroInserito = parseInt(prompt('dammi un numero'));

    // STATE DI CONTROLLO DEI VALORI IN INGRESSO E POSSIBILE USCITA DAL LOOP 
    if (((numeroInserito < 0)) || (numeroInserito > 100) || (isNaN(numeroInserito))) {
        alert('Smettila, ti ho chiesto un numero da zero a cento!');
        break;
    }
    if (numeriUtente.includes(numeroInserito)) {
        alert('Non fare il furbetto, non vale scrivere lo stesso numero!');
        break;
    }

    numeriUtente.push(parseInt(numeroInserito));
    console.log(numeriUtente);


    // STATO DI SCONFITTA
    if (numeriComputer.includes(numeroInserito)) {
        alert('Mi dispiace ma hai perso, ti sei fermato al livello ' + i + '.');
        break;
    }

    // STATO FINALE IN CASO DI VITTORIA
    if (i == numeriComputer.length) {
        alert('complimenti, hai vinto tu.')
    }
}