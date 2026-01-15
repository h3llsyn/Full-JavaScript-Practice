const display = document.getElementById('display')

function aparecerNoDisplay(botaoClicado){
    display.value += botaoClicado;
}

function limparDisplay(){
    display.value = '';
}

function calcular(){
    let calculo = '';
    calculo = eval(display.value);
    display.value = calculo;
}