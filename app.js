const input = document.getElementById('input')
const button = document.getElementById('button')
const display = document.getElementById('display')

function inserirTarefa() {
    let tarefa = input.value
    display.innerHTML +=
        `<div class = "tarefa">
        ${tarefa}
        <div>
            <button class="delete">deletar</button>
            <button class= "edit"> editar </button>
        </div>
    </div>`
    input.value = ''
}
button.addEventListener("click", inserirTarefa)