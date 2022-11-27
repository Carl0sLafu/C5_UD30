const capicua = prompt("Escrive un palíndromo");

function comprobacion() {

    // find the length of a string
    var capicuatrim = capicua.trim().split(" ").join("").toLowerCase();
    const len = capicuatrim.length;
    
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
    
        // check if first and last string are same
        if (capicuatrim[i] !== capicuatrim[len - 1 - i]) {

            return false;

        }

    }

    return true;
    
}

alert((comprobacion()?"Es":"No es") + " un palíndromo")