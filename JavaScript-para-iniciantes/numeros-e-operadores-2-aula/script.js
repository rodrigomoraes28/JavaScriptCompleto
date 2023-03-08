var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10;

console.log(soma1);

var x = 5;
console.log(x++);
x++;
console.log(x);

x = 5;

console.log(x--);
console.log(x);

//Operadores Aritméticos Unários

//O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; //NaN
-frase; //NaN

var idade = '28'; 

var idade2 = + '28';
console.log(idade2);

+idade; // 28 (número) , transformou a string que contenha apenas digitos em uma variavel do tipo number , espaço ele tambem ignora, mas se tiver qualquer letrinha ele ja da um NaN

-idade; // -28 (número)

console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1