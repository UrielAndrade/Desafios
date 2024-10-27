const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question("Digite um numero para converter em binario: ", (numero) => {
    parseInt(numero);
    read.close();

    function ConvertToBininario(numero) {
        let binario = '';
        while (numero > 0) {
            let resto = numero % 2;
            binario = resto + binario;
            numero = Math.floor(numero / 2)
        }
        return binario;
    }

    let result = ConvertToBininario(numero);
    console.log(`O número ${numero} em binário é: ${result}`);
});