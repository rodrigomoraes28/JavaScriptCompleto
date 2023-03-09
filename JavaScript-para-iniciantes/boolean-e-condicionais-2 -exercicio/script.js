// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var idadeRodrigo = 20;
var idadePedrinho = 10
if(idadeRodrigo > idadePedrinho){
  console.log('É maior');
}
else if ( idadeRodrigo < idadePedrinho){
  console.log('É menor');
}
else{
  console.log('É igual');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

//3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28;  //true
var possuiDoutorado = false; //false
var empregoFuturo; //false undefined
var dinheiroNaConta = 0; //false


if(nome){
  console.log(nome);
}
else{
  console.log('É falso');
}

if(idade){
console.log(idade)
}
else{
  console.log('É falso');
}

if(possuiDoutorado){
  console.log(possuiDoutorado);
}
else{
  console.log('É falso');
}


if(empregoFuturo){
  console.log(empregoFuturo);
}
else{
  console.log('É falso');
}


if(dinheiroNaConta){
  console.log(dinheiroNaConta);
}
else{
  console.log('É falso');
}

 




// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

console.log(brasil === china);

if(brasil > china){
  console.log("Brasil tem mais habitantes");
}
else{
  console.log("China tem mais habitantes");
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

//aparece falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) { //true
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

//Cão