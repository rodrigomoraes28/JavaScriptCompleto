var idade = 23;

console.log(idade);

var idade = 2e2;
console.log(idade);

var idade = 2e-2;
console.log(idade);

//certa precisão para até 15 digitos


//Operadores Aritiméticos:

var total = 10 + 5 + 10;
var divisao = 200 / 5;
var modulo = 3456782345678 % 3;

console.log(total);
console.log(divisao);
console.log(modulo);

//Sempre que eu junto um número com uma string eu estou CONCATENANDO ela
 
var soma = '100' + 50 // 10050 , esse 10050 é uma string e não um número
var subtracao = '100' - 50; // 50, como não existe subtraçaõ de string ele tenta converter esse '100' para number e daí subtrai 50 dele e fica 50 e em number
var multiplicacao = '100' * '2'; // 200 , funciona igual para a subtracao
var divisao = 'Comprei 10 ' / 2; // Nan (Not a Number)


console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);

console.log(isNaN(divisao));
//É possível verificar se uma variável é Nan ou não com a função isNan()

//Outro exemplo


var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; //'80kg'
var pesoPorDois = peso / 2 //NaN (Not a Number)

console.log(peso);
console.log(pesoPorDois);