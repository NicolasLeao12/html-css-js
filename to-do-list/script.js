const inputTarefa = document.getElementById("input_tarefa")
const button = document.getElementById("adicionar_tarefa")
const lista = document.getElementById("lista")

let arrayTarefas = []

button.addEventListener("click", adicionarTarefa)


function adicionarTarefa() {
    let tarefa = inputTarefa.value
    inputTarefa.value = ""

    if ( arrayTarefas.includes(tarefa) ) {
        alert("Já tem isso na lista.")
        return
    }

    arrayTarefas.push(tarefa)

    let tarefaHTML = `
            <input type="checkbox" name="" class="finalizado">
            <p class="tarefa">${tarefa}</p>
            <i class="bi bi-pencil-square editar_tarefa"></i>
            <i class="bi bi-trash remover_tarefa"></i>
    `
    let itemLista = document.createElement("li")
    itemLista.innerHTML = tarefaHTML
    lista.appendChild(itemLista)

    let removerTarefa = document.getElementsByClassName("remover_tarefa")
    let editarTarefa = document.getElementsByClassName("editar_tarefa")
    let finalizaTarefa = document.getElementsByClassName("finalizado")

    for(let i = 0 ; i < removerTarefa.length ; i++){

        removerTarefa[i].addEventListener("click", (e) => {
            arrayTarefas.splice(arrayTarefas.indexOf(e.target.innerText), 1)
            e.target.parentElement.remove()
        })

        editarTarefa[i].addEventListener("click", (e) => {
            // e.target.parentElement.querySelector("p").innerText = prompt("Novo valor da tarefa")
            let novaTarefa = prompt("Digite a nova tarefa")
            arrayTarefas.find(element => {
                if (element == e.target.parentElement.querySelector("p").innerText){
                    arrayTarefas[arrayTarefas.indexOf(element)] = novaTarefa
                    e.target.parentElement.querySelector("p").innerText = novaTarefa
                }
            })
        })

        finalizaTarefa[i].addEventListener("click", (e) => {
            if (e.target.checked) {
                e.target.parentElement.classList = "concluir"
            }else{
                e.target.parentElement.classList = ""
            }
        })

    }
}

