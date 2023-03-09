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


function mostraConsole(){
  console.log('Oi');
}

function imc2(peso,altura){
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(80, 1.8); //undefined porque nao tem o return

console.log(imc2(80, 1.80))

function terceiraIdade(idade){
  console.log(typeof idade);
  if(typeof idade !== 'number'){
    return 'Por favor preencha um número';
  }
  else if(idade >= 60){
    return true;
  }
  else{
    return false;
  }
}


console.log(terceiraIdade(60));

//Escopo
var totalPaises = 193;
function faltaVisitar(paisesVisitados){
    return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(totalPaises);



var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro
