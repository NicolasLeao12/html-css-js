// let cores = [
// "blue",
// "red",
// "grey",
// "green",
// "yellow",
// "brown",
// "purple",
// "orange",
// "pink"
]

let formas = [
    "retangulo",
    "quadrado",
    "circulo",
    "losango"

]







// para "pegar" um elemnento do documento html:
// document.getElementById(ID DO ELEMNTO)
//document.querySelector("ID DO ELEMENTO")

let divPrincipal = document.querySelector("#principal")
let pNomeDaForma = document.querySelector("#nomedaforma")
let index = 0


function proximo(){

    pNomeDaCor.innerText = cores[index]

    if ( index > formas.length - 1 ) {
        index = 0
    }
    // divPrincipal.style.backgroundColor = cores[index]
    // index++
    if ( formas[index] == "retangulo" ) {

        divPrincipal.style.width = "400px"
        divPrincipal.style.width = "200px"

    }
}

function anterior(){
        index--
        if ( index < 0){
            index = formas.length - 1
        }
    divPrincipal.style.backgroundColor = cores[index]
    index--
}
 