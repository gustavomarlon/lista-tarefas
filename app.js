const input = document.getElementById("input");
const button = document.getElementById("button");
const display = document.getElementById("display");

function inserirTarefa() {
    let tarefa = input.value;

    if (tarefa == '') {
        alert('Favor inserir uma tarefa')
        return
    }

    display.innerHTML +=
        `<div class="tarefa">
      ${tarefa}
         <div>
            <button class="delete"> Deletar </button>
            <button class="edit"> Editar </button>
         <div>
    </div>`;
    input.value = ''
}

function removerTarefa(event) {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.parentElement.remove()
    }
}

button.addEventListener("click", inserirTarefa)
display.addEventListener("click", removerTarefa)