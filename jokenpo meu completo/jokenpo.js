function pcMovimento(){
    const numeroAleatorioPc = Math.random();
    let jogadaPc = '';

    if(numeroAleatorioPc >= 0 && numeroAleatorioPc < 1/3){
        jogadaPc = 'pedra';
    }
    else if(numeroAleatorioPc >= 1/3 && numeroAleatorioPc < 2/3){
        jogadaPc = 'papel';
    }
    else if(numeroAleatorioPc >= 2/3 && numeroAleatorioPc <= 1){
        jogadaPc = 'tesoura';
    }
    return jogadaPc;
}

let pontosPlayer = 0;
let pontosPc = 0;
const score = document.getElementById('score');
const suaJogadaMao = document.getElementById('suaJogadaMao');
const pcJogadaMao = document.getElementById('pcJogadaMao');
const suaJogadaEscrita = document.getElementById('suaJogadaEscrita');
const pcJogadaEscrita = document.getElementById('pcJogadaEscrita');
const resultado = document.getElementById('resultado');

function playerMovimento(suaJogada){
    const jogadaPc = pcMovimento()

    if(suaJogada === 'pedra'){
        suaJogadaEscrita.textContent = 'Pedra';
        suaJogadaMao.textContent = '✊';

        if(jogadaPc === 'pedra'){
            resultado.textContent = 'Empate';
            pcJogadaEscrita.textContent = 'Pedra';
            pcJogadaMao.textContent = '✊';
        }
        else if(jogadaPc === 'papel'){
            resultado.textContent = 'Computador ganhou';
            pontosPc++;
            pcJogadaEscrita.textContent = 'Papel';
            pcJogadaMao.textContent = '✋';
        }
        else if(jogadaPc === 'tesoura'){
            resultado.textContent = 'Você ganhou';
            pontosPlayer++
            pcJogadaEscrita.textContent = 'Tesoura';
            pcJogadaMao.textContent = '✌'
        }
    }
    else if(suaJogada === 'papel'){
        suaJogadaEscrita.textContent = 'Papel';
        suaJogadaMao.textContent = '✋'

        if(jogadaPc === 'pedra'){
            resultado.textContent = 'Você ganhou';
            pontosPlayer++;
            pcJogadaEscrita.textContent = 'Pedra';
            pcJogadaMao.textContent = '✊';
        }
        else if(jogadaPc === 'papel'){
            resultado.textContent = 'Empate';
            pcJogadaEscrita.textContent = 'Papel';
            pcJogadaMao.textContent = '✋'
        }
        else if(jogadaPc === 'tesoura'){
            resultado.textContent = 'Computador ganhou';
            pontosPc++;
            pcJogadaEscrita.textContent = 'Tesoura';
            pcJogadaMao.textContent = '✌'
        }
    }
    else if(suaJogada === 'tesoura'){
        suaJogadaEscrita.textContent = 'Tesoura';
        suaJogadaMao.textContent = '✌'

        if(jogadaPc === 'pedra'){
            resultado.textContent = 'Computador ganhou';
            pontosPc++;
            pcJogadaEscrita.textContent = 'Pedra';
            pcJogadaMao.textContent = '✊';
        }
        else if(jogadaPc === 'papel'){
            resultado.textContent = 'Você ganhou';
            pontosPlayer++;
            pcJogadaEscrita.textContent = 'Papel';
            pcJogadaMao.textContent = '✋'
        }
        else if(jogadaPc === 'tesoura'){
            resultado.textContent = 'Empate';
            pcJogadaEscrita.textContent = 'Tesoura';
            pcJogadaMao.textContent = '✌'
        }
    }
    score.textContent = `Você ${pontosPlayer} - ${pontosPc} Computador`
}