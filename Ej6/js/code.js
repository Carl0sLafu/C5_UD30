const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numbers = prompt("Numeros del DNI");
var charDni = prompt("Letra del DNI");

Start();

function numerosValidos() {

    if (numbers <= 99999999 && numbers > 0) {

        return true;

    } else {

        return false;

    }

}

function calcularLetra() {

    var charcalc = numbers % 23;
    
    return letras[charcalc];

}

function finalCompare() {

    if (calcularLetra().localeCompare(charDni.toUpperCase)) {

        console.log("DNI introducido correctamente");

    } else {

        console.log("La letra indicada o el número del DNI es incorrecto");

    }

}

function Start() {

    if (numerosValidos()) {

        finalCompare();

    } else {

        console.log("El número proporcionado no es valido");

    }

}