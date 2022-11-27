var valores = [true, 5, false, "hola", "adios", 2];

function compararString() { 

    if (valores[4].length > valores[3].length) {

        return valores[4];

    } else {

        return valores[3];

    }

}

function booleans() {

    if (valores[0] == valores[2]) {

        return true;

    } else {

        return false;

    }

}

function operations() {

    var operaciones = "";

    operaciones += valores[1].toString() + " + " + valores[5].toString() + " = " + (valores[1] + valores[5]).toString() + "\n";
    operaciones += valores[1].toString() + " - " + valores[5].toString() + " = " + (valores[1] - valores[5]).toString() + "\n";
    operaciones += valores[1].toString() + " * " + valores[5].toString() + " = " + (valores[1] * valores[5]).toString() + "\n";
    operaciones += valores[1].toString() + " / " + valores[5].toString() + " = " + (valores[1] / valores[5]).toString() + "\n";
    operaciones += valores[1].toString() + " % " + valores[5].toString() + " = " + (valores[1] % valores[5]).toString() + "\n";

    return operaciones;

}

console.log(compararString());
console.log(booleans());
console.log(operations());