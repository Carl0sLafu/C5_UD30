const cadenaTexto = prompt("Introduce aqui una cadena de texto");

composicion();

function composicion() {

    if (cadenaTexto.search(/[a-z]/) != -1 && cadenaTexto.search(/[A-Z]/) != -1) {

        alert("Hay mayúsculas y minúsculas en el texto intoducido");

    } else {

        if (cadenaTexto.search(/[A-Z]/) != -1) {

            alert("Solo hay mayúsculas en el texto introducido");

        } else if (cadenaTexto.search(/[a-z]/) != -1) {

            alert("Solo hay minúsculas en el texto introducido");

        } else {

            alert("Something is wrong, contact with developers");

        }

    }
        


}