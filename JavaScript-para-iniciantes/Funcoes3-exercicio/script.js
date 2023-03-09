// Crie uma função para verificar se um valor é Truthy



function verifca(numero){
    return(!!numero);
  }
  console.log(verifca(0));


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado){
  return lado * 4;
}

console.log(perimetroQuadrado(5));


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome,sobrenome){
  return `${nome} ${sobrenome}`
}

console.log(nomeCompleto("rodrigo","moraes"));

// Crie uma função que verifica se um número é par

function ehPar(numero){
  var modulo = numero % 2;
  if(modulo !== 0){
    return "É par" + (!!numero);
  }
  else{
    return "Não é par" + (!!numero);
  }

}

console.log(ehPar(6));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(teste){
  return (typeof teste);
}

console.log(tipoDado("Plavarinha"));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.



addEventListener('click',function(){ //prestar atençaõ aqui, precisa abrir a funcao, nao pode usar uma que ja criei
  console.log('Rodrigo Moraes');
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
