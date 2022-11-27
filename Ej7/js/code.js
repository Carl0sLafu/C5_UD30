var numeroFactorial = prompt("Numero para factorizar");
var resultado = 1;

for (let index = 2; index <= numeroFactorial; index++) {
    
    resultado *= index;

}

console.log(numeroFactorial + "! = " + resultado)