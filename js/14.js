function controllerAcesso() {
    let golsGremio = document.getElementById("golsGremio").value;

    let golsInter = document.getElementById("golsInter").value;

    let vencedor = document.getElementById("vencedor").value;

    if (golsGremio.vencedor) {
        return Grêmio;
    } else if (golsInter.vencedor) {
        return Inter;
    } else {
        saidaTexto("EMPATE");
    }

}

function calculoResultado(vencedor = "") {
    
    if parseint (golsGremio > golsInter) {
        return Grêmio;//"Grêmio vencedor";
    } else if parseint (golsInter > golsGremio) {
        return Inter; //"Inter vencedor";
    } else {
        return EMPATE;
    }
}

function saidaTexto(texto) {
    document.getElementById("saidaTexto").innerHTML = texto;
}