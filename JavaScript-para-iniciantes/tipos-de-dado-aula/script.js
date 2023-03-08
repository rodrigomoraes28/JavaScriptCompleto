var idade = 28;
var time = null; //aparece no console.log que é um tipo object , é tipo um bug mas aparece porque no passado muito null era objeto algo do tipo, apenas uma curiosidade
var simbolo = Symbol();
console.log(typeof simbolo);
 
console.log(typeof time);
// console.log(typeof nome);


var nome = 'André';
var sobrenome = 'Rafael';
var nomeCompleto = nome + sobrenome;

console.log(nomeCompleto);

var gols = 1000;
var frase = 'Romário fez' + gols + ' gols';
console.log(typeof frase);

var ano = '2018';
var mes = 8;

console.log(ano + mes);

//errado
// var frase1 = 'Esse é o 'milior' jogo';

var frase2 = 'Esse é o "melhor" jogo';

var melhor = 'teste';
var frase1 = 'Esse é o ' + melhor + 'jogo';
console.log(frase1);
var frase1 = "Esse é o \"melhor\" jogo";
console.log(frase1);

console.log('Isso mesmo');

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
console.log(frase1);

var frase2 = `Romário fez ${gols * 2} gols`;
console.log(frase2);