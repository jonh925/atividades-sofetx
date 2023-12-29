Vamos criar um cadastro de pessoa com os seguintes dados: nome, salário, idade e se possui diploma. Antes de começar a codificação, identifiquem os tipos de cada variável. Em seguida, desenvolvam o código utilizando exemplos para cada variável que respeitem os tipos identificados. Certifiquem-se de que os valores correspondam aos tipos de dados corretos

let nome = "jonatas"; // string
let salario = 2500; // number
let idade = 28; // number
let possuiDiploma = true; // boolean

nome é do tipo string e contém o valor "jonatas". A variável salario é do tipo number e contém o valor ''2500'' A variável idade também é do tipo number e contém o valor''28''. Por fim, a variável possuiDiploma é do tipo boolean e contém o valor ''true''


//.....................................................................
A atividade que faremos é a da “calculadora de média”. Para isso, você deve criar um programa JavaScript que calcule a média de três notas inseridas pelo usuário e exiba o resultado no console.

Primeiro, solicite que o usuário insira três notas (entre 0 e 10) usando a função prompt(). Elas devem ser armazenadas em variáveis adequadas, por exemplo, nota1, nota2 e nota3, com o tipo de dado Number. Depois, some-as e divida por três. O resultado deste cálculo será o valor da média, que deve ser armazenado em uma variável chamada media. Por fim, exiba esse valor no console usando a função console.log().

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;

console.log(`A média das notas é ${media}`);

//......................................................................................................
Com os conceitos aprendidos, crie um programa de calculadora que:

- receba dois valores, que devem ser salvos em variáveis; 
- o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos; 
- com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
- se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma. 

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));
let operador = prompt("Digite o operador (+, -, *, /): ");

let resultado;

if (operador === "+") {
  resultado = valor1 + valor2;
} else if (operador === "-") {
  resultado = valor1 - valor2;
} else if (operador === "*") {
  resultado = valor1 * valor2;
} else if (operador === "/") {
  resultado = Math.floor(valor1 / valor2);
  let sobra = valor1 % valor2;
  console.log(`Resultado: ${resultado}, Sobrou: ${sobra}`);
} else {
  console.log("Operador inválido!");
}

if (operador !== "/") {
  console.log(`Resultado: ${resultado}`);
}

//............................................................................................................
Crie um programa que contenha os seguintes tipos de funções: 

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro; 
2. uma função tradicional com parâmetros e um retorno de valor; 
3. uma arrow function com parâmetros e que retorne um valor. 

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora. 

// Função tradicional sem parâmetros
function saudacao() {
  console.log("Olá, tudo bem?");
}

// Função tradicional com parâmetros e retorno de valor
function soma(a, b) {
  return a + b;
}

// Arrow function com parâmetros e retorno de valor
const subtracao = (a, b) => a - b;

// Programa de calculadora que utiliza as três funções
let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));

saudacao();

let resultadoSoma = soma(valor1, valor2);
console.log(`A soma dos valores é ${resultadoSoma}`);

let resultadoSubtracao = subtracao(valor1, valor2);
console.log(`A subtração dos valores é ${resultadoSubtracao}`);


//........................................................................................................

Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta. 

Observações: 
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto; 
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
 - o número da conta deve retornar o número da conta.


let Banco = {
  conta: "123456",
  saldo: 1000,
  tipoConta: "corrente",
  agencia: "0001",
  buscarSaldo: function() {
    return this.saldo;
  },
  deposito: function(valor) {
    this.saldo += valor;
  },
  saque: function(valor) {
    this.saldo -= valor;
  },
  numeroConta: function() {
    return this.conta;
  }
};

console.log(`Saldo atual: ${Banco.buscarSaldo()}`);
Banco.deposito(500);
console.log(`Saldo atual após depósito: ${Banco.buscarSaldo()}`);
Banco.saque(200);
console.log(`Saldo atual após saque: ${Banco.buscarSaldo()}`);
console.log(`Número da conta: ${Banco.numeroConta()}`);
//.....................................................................................................

Com base no que estudamos, escolha dois objetos materiais e dois abstratos. Em seguida, faça uma lista com, pelo menos, três atributos e três métodos para cada tipo de objeto. Para finalizar, demonstre esses objetos em JavaScript e exemplifique as suas características e ações.

Objetos materiais:

Carro

Atributos:
⦁	Marca
⦁	Modelo
⦁	Cor
Métodos:
⦁	Acelerar
⦁	Frear
⦁	Ligar

let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  cor: "preto",
  acelerar: function() {
    console.log("Acelerando...");
  },
  frear: function() {
    console.log("Freando...");
  },
  ligar: function() {
    console.log("Ligando...");
  }
};

Geladeira

Atributos:
Marca
⦁	Capacidade
⦁	Cor
Métodos:
⦁	Congelar
⦁	Descongelar
⦁	Ligar

let geladeira = {
  marca: "Brastemp",
  capacidade: "500 litros",
  cor: "branca",
  congelar: function() {
    console.log("Congelando...");
  },
  descongelar: function() {
    console.log("Descongelando...");
  },
  ligar: function() {
    console.log("Ligando...");
  }
};


Conta bancária

Atributos:
⦁	Número da conta
⦁	Saldo
⦁	Tipo de conta
Métodos:
⦁	Buscar saldo
⦁	Depositar
⦁	Sacar

let contaBancaria = {
  numeroConta: "123456",
  saldo: 1000,
  tipoConta: "corrente",
  buscarSaldo: function() {
    return this.saldo;
  },
  depositar: function(valor) {
    this.saldo += valor;
  },
  sacar: function(valor) {
    this.saldo -= valor;
  }
};
Usuário

Atributos:
⦁	Nome
⦁	E-mail
⦁	Senha
Métodos:
⦁	Fazer login
⦁	Fazer logout
⦁	Alterar senha

let usuario = {
  nome: "João",
  email: "joao@gmail.com",
  senha: "123456",
  fazerLogin: function() {
    console.log("Fazendo login...");
  },
  fazerLogout: function() {
    console.log("Fazendo logout...");
  },
  alterarSenha: function(novaSenha) {
    this.senha = novaSenha;
    console.log("Senha alterada com sucesso!");
  }
};
//.........................................................................


Utilizando a linguagem JavaScript, crie uma situação matemática na qual os números precisam ser informados pelo usuário. Além disso, deve ocorrer uma exceção dentro do código. Utilize os métodos try(), catch() e finally() para realizar a captura e o tratamento dessa exceção.

try {
  let numero1 = parseFloat(prompt("Digite o primeiro número: "));
  let numero2 = parseFloat(prompt("Digite o segundo número: "));

  if (isNaN(numero1) || isNaN(numero2)) {
    throw "Um dos valores digitados não é um número!";
  }

  let resultado = numero1 / numero2;
  console.log(`O resultado da divisão é ${resultado}`);
} catch (erro) {
  console.log(`Ocorreu um erro: ${erro}`);
} finally {
  console.log("Fim do programa.");
}

No exemplo acima, se o usuário digitar um valor inválido (como uma letra), o código lança uma exceção e exibe a mensagem “Um dos valores digitados não é um número!” no console. Se os valores digitados pelo usuário forem válidos, o código realiza a divisão e exibe o resultado no console.



