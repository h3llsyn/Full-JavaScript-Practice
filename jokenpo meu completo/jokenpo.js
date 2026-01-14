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

function playerMovimento(suaJogada){
    const jogadaPc = pcMovimento()
    let resultado = '';

    if(suaJogada === 'pedra'){
        resultado = '';

        if(jogadaPc === 'pedra'){
            resultado = 'Empate';
        }
        else if(jogadaPc === 'papel'){
            resultado = 'Computador ganhou';
            pontosPc++;
        }
        else if(jogadaPc === 'tesoura'){
            resultado = 'Você ganhou';
            pontosPlayer++
        }
    }
    else if(suaJogada === 'papel'){
        resultado = '';

        if(jogadaPc === 'pedra'){
            resultado = 'Você ganhou';
            pontosPlayer++;
        }
        else if(jogadaPc === 'papel'){
            resultado = 'Empate';
        }
        else if(jogadaPc === 'tesoura'){
            resultado = 'Computador ganhou';
            pontosPc++;
        }
    }
    else if(suaJogada === 'tesoura'){
        resultado = '';

        if(jogadaPc === 'pedra'){
            resultado = 'Computador ganhou';
            pontosPc++;
        }
        else if(jogadaPc === 'papel'){
            resultado = 'Você ganhou';
            pontosPlayer++;
        }
        else if(jogadaPc === 'tesoura'){
            resultado = 'Empate';
        }
    }
    alert(`Computador jogou ${jogadaPc}, você jogou ${suaJogada}. ${resultado}.`);
    score.textContent = `Você ${pontosPlayer} - ${pontosPc} Computador`
}