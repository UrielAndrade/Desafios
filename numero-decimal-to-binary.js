let numero = 27;

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
console.log(result);