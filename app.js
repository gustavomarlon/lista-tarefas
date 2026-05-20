const input = document.getElementById('input')
const button = document.getElementById('button')
const display = document.getElementById('display')

function inserirTarefa() {
    let tarefa = input.value
    display.innerHTML += `<p>${tarefa}</p>`
    input.value = ''
}
button.addEventListener("click", inserirTarefa)