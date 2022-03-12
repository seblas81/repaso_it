
function generaNumeros() {
    return Math.floor(Math.random() * 46)
}



numeros = []
/*numeros.push(quini)
console.log(numeros)
*/



num_anterior = 0
for (i = 0; i <6; i++) {
    var quini = generaNumeros()

    console.log(i, quini)
}
