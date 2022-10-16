const preco11 = 0.3;
const preco12 = 0.25;



function controllerAcesso(preco11, preco12, numeroMacas) {
    let numeroMacas = document.getElementById("numeroMacas").value;
     let valorUnitario = 0.3 || 0.25;
     
     if (numeroMacas < 12 = precoTotal){

   } else {
     numeroMacas >= 12 = precoTotal;
   }

}

function calculoPrecoTotal(preco11, preco12) {
    let precoTotal = numeroMacas * preco11;
    if (numeroMacas < 12) {
        return numeroMacas * preco11;
    } else {
        return numeroMacas * preco12; 
    }
}

function saidaTexto(texto) {
    document.getElementById("saidaTexto").innerHTML = texto;
}

