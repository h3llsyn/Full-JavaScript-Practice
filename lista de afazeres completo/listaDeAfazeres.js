const lista = document.getElementById('lista');
const botao = document.getElementById('botao');
const tarefas = document.createElement('input');
tarefas.type = 'checkbox'

function adicionarTarefa(){
    lista.appendChild(tarefas);
}