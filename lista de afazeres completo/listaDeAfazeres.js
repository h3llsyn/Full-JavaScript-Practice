const lista = document.getElementById('lista');
const inputTarefa = document.getElementById('inputTarefa');
const botao = document.getElementById('botao');

function adicionarTarefa(){
    if(!(inputTarefa.value.trim() === '')){
        const li = document.createElement('li')
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const texto = document.createElement('span');
        texto.textContent = inputTarefa.value;
        li.appendChild(checkbox);
        li.appendChild(texto);
        lista.appendChild(li);
        inputTarefa.value = '';
    }
}

botao.addEventListener('click', adicionarTarefa);