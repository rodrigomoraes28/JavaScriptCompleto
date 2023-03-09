var x;
var possuiGraduacao = false;
var possuiDoutorado = true;

if(possuiGraduacao){
  console.log('É verdadeiro');
  var x = 10;
}
else if (possuiDoutorado){
  console.log('Possui Doutorado');
}
else{
  console.log('Não possui nada');
}



//Truthy e Falsy

var nome = '10kg' / 10;

if(nome){
  console.log(nome);
} else{
  console.log('Nome não existe');
}

// Operador Lógico de Negação!

if(!possuiGraduacao){
  console.log(possuiGraduacao);
  console.log('Não possui graduação');
}


//Operadores de comparação

10 > 5

//essas operações que usam 3 iguais ou 2 iguais e um diferente compara o tipo de dado tambem e nao so o q ta escrito, entao se tiver uma string e um numero e usa os 3 comparadores é o mais correto até do que 2 iguais
var x = 'Gato';
console.log(x === 'gato');
console.log(x !== 'gato'); //essas co


var x = '10';
console.log(x === 10);