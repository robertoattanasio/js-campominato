var numeriComputer = [];
var numeriUtente = [];
var difficolta = parseInt(prompt('Definisci una difficoltà dandomi un numero tra 1 (numeri da 0 a 100), 2 (numeri tra 0 e 80) o 3 (numeri tra 0 50).'));
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
    var numeroInserito = parseInt(prompt('Dimmi un numero.'));

    // STATE DI CONTROLLO DEI VALORI IN INGRESSO E POSSIBILE USCITA DAL LOOP 
    if (((numeroInserito < 0)) || (numeroInserito > livello) || (isNaN(numeroInserito))) {
        alert('Hai inserito un numero fuori dal range consentito dal tuo livello. Ricominciamo...');
        break;
    }
    if (numeriUtente.includes(numeroInserito)) {
        alert('Non fare il furbetto, non vale scrivere lo stesso numero! Ricomincia da capo e sii onesto.');
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
        alert('Complimenti, hai vinto tu. Hai superato ' + numeriComputer.length + ' livelli!')
    }
}