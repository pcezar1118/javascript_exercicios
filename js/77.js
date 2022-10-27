
//const idades = {
    const idadeJoao = 20;
    const idadePedro = 30; 
    const idadeMaria = 40; 
    
    /*mediaIdade: function() {
    return this.idadeJoao + this.idadePedro + this.idadeMaria / 3;
    console.log(mediaIdade());
}
};*/

function somaIdades() {
 return idadeJoao + idadePedro + idadeMaria;
}
console.log(somaIdades());

function mediaIdade() {
 return somaIdades() / 3;
}    
console.log(mediaIdade());



