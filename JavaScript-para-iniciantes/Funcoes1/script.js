function areaQuadrado(lado){
  return lado * lado;
}

console.log(areaQuadrado(10));


function pi(){
  return 3.14;
}

var total = 5 * pi();

console.log(pi);


//Parametros e Argumentos

function imc(peso,altura){
  const imc = peso / (altura ** 2);
  return imc;
}

imc(80 , 1.8);

console.log(imc(66.5, 1.76));

//Parenteses executa a função

function corFavorita(cor){
  if(cor === 'azul'){
    return 'Eu gosto do céu';
  }
  else if (cor === 'verde'){
    return 'Eu gosto de mato';
  }
  else{
    return 'Eu não gosto de cores';
  }
}

console.log(corFavorita('verde'));
console.log(corFavorita('azul'));
console.log(corFavorita('amarelo'));


//Argumentos podem ser funções
//função Callback

addEventListener('click', function(){
  console.log('Clicou');
});
