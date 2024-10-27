const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Desafio-1 Idade De Camila //
/*
let idades = [];

function obterIdade(i) {
    if (i > 3) {
        //entra quando tds as idades sao inseridas//
        let maior = Math.max(...idades);
        let menor = Math.min(...idades);


        let somatotal = idades[0] + idades[1] + idades[2];
        let camilaIdade = somatotal - menor - maior;

        console.log(`A idade de Camila é: ${camilaIdade}`);
        read.close();
        return;
    }

    read.question(`Digite a ${i}ª idade: `, (idade) => {
        idades[i - 1] = parseInt(idade);
        obterIdade(i + 1);
    });
}
obterIdade(1);*/


//Desafio-2 Torneio de Tênis//
/*

let resultados = [];

function solicitarResultados(i) {

    if (i >= 6) {
        console.log(`Resultados finais: ${resultados.join(', ')}`);

        let vitorias = 0;
        for (let j = 0; j < resultados.length; j++) {
            if (resultados[j] === 'v') {
                vitorias++;
            }
        }
        let grupo = (vitorias >= 5) ? 1 : (vitorias >= 3) ? 2 : (vitorias >= 1) ? 3 : -1;
        console.log(`O seu grupo é: ${grupo}`);

        read.close();
        return;
    }
    //referente ao resultado da partida//
    read.question(`Digite o resultado para a posição ${i + 1} (digite 'p' para perder ou 'v' para vencer): `, (resultado) => {
        resultados[i] = resultado;
        solicitarResultados(i + 1);
    });
}

solicitarResultados(0);*/



//Desafio-3 piloto automático// 
/*
let valores = [];

function solicitarValores(i) {
    if (i > 2) {
        read.close();

        let [A, B, C] = valores;
        //faz a comparação//
        let distanciaAB = B - A;
        let distanciaBC = C - B;

        if (distanciaAB < distanciaBC) {
            console.log(1);
        } else if (distanciaAB > distanciaBC) {
            console.log(-1);
        } else {
            console.log(0);
        }
        return;
    }

    const Carro = ['A', 'B', 'C'];
    read.question(`Digite a velocidade de ${Carro[i]}: `, (valor) => {
        valores[i] = parseInt(valor);
        solicitarValores(i + 1);
    });
}
solicitarValores(0);*/