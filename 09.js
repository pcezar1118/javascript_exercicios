function controllerAcesso() {
    let numeroMacas = document.getElementById("numeroMacas").value;

    let preco11 = 0.3;
    let preco12 = 0.25;


}

function calculoPrecoTotal(preco11, preco12) {
    let precoTotal = numeroMacas * preco11 || preco12;
    if (numeroMacas < 12) {
        return 0.3 * numeroMacas;
    } else {
        return 0.25 * numeroMacas; 
    }
}

function saidaTexto(number) {
    document.getElementById("saidaTexto").innerHTML = number;
}