function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpar() {
    document.getElementById('resultado').innerHTML = "";
    //document.getElementById('numEscritos').innerHTML = "";
}
function limpartudo() {
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('numEscritos').innerHTML = "Último Resultado =";
}

function limparUltimaConta() {
    document.getElementById('numEscritos').innerHTML = "Último Resultado =";
}

function ultimoResultado() {
    var resultado = document.getElementById('resultado').innerHTML;
    var ultimoResultado = new Array();
    resultado = ultimoResultado.push(document.getElementById('numEscritos').innerHTML = ('Último Resultado = ' + resultado));
}


function apagarNumEsquerda() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);

    } else {
        document.getElementById('resultado').innerHTML = "Digite Alguma Operação Antes!!!";

    }
}