const numero = prompt("Escribe un número");

function isPar() {

    if (numero % 2 == 0) {

        return true;

    } else {

        return false;

    }

}

alert("El numero introducido es " + (isPar()?"par":"impar"));