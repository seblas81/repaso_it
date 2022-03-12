document.write("sebaaaaaa")






function cambiaTitulo() {
    console.log(document.title)   
    var titulo = document.getElementById('webtitle')
    titulo.textContent = "Cerati"
    console.log(titulo.textContent)
}

cambiaTitulo()

const baseprueba = []



function agregaArr($producto) {

    baseprueba.push ($producto)
}

function mostrarArr(){

    console.log(baseprueba)
}

function longitudArr(){
    console.log(baseprueba.length)
}


agregaArr("Digitalizador")
agregaArr("Panel")
mostrarArr()
longitudArr()


var quini = Math.floor(Math.random() * 46)
console.log(quini)