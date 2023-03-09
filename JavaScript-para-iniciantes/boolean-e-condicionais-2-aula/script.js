var x = 10;

console.log(x !== 11);

if((5-5) && (5+5)){
  console.log('Verdadeiro');
}
else{
  console.log('Falso');
}

//Valor de numero negativo é true
//Só o valor 0 é false

var condicional = (5-10) && (5+5); //O && Sempre retorna o ultimo valor verdadeiro ou o primeiro falso que aparecer
if(condicional){
  console.log('Verdadeiro', condicional);
}
else{
  console.log('Falso');
}

//Já o || retorna o primeiro valor verdadeiro que ele encontrar


var corFavorita = 'Azul';

switch (corFavorita){
  case 'Azul':
    console.log('Olhe para o céu');
    break;
  case 'Amarelo':
    console.log('Olhe para o Sol');  
  case 'Verde':
    console.log('Olhe para a Floresta');
  default:
    console.log('Feche os Olhos');
}

