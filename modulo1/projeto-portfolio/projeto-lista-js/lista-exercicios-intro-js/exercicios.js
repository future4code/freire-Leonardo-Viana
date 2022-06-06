// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt("Qual a altura do retângulo?"))
  let largura = Number(prompt("Qual a largura do retângulo?"))
  let area = altura * largura 

  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoatual = prompt("Qual op ano atual?")
  let anonascimento = prompt("Qual o ano do seu nascimento?")

  console.log(anoatual-anonascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso/(altura*altura)

  return imc
}
 

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual seu nome?")
  let idade = prompt("Qual sua idade?")
  let email = prompt("Digite seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`) 

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Digite sua cor favorita")
  let cor2 = prompt("Digite sua segunda cor favorita")
  let cor3 = prompt("Digite sua terceira cor favorita")
  let trescores = [cor1,cor2,cor3]

  console.log(trescores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  let resultado = string.toUpperCase()

  return resultado

}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let ingressosvendidos = custo/valorIngresso
   
  return ingressosvendidos

}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let resultado = (string1.length === string2.length) 
 
  return resultado
}
    console.log(checaStringsMesmoTamanho("ola", "alou"))

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}
 console.log(retornaPrimeiroElemento([1,2,3]))

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[(array.length)-1]

}
console.log(retornaUltimoElemento([1,2,3,4,5,6,9]))

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  array.splice(0,0,array[(array.length)-1])
  array.pop()
  array.push(array[1])
  array.splice(1,1)

  return array
}
console.log(trocaPrimeiroEUltimo([1,2,3,4,5,]))

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  return string1.toUpperCase() === string2.toUpperCase()
}
console.log(checaIgualdadeDesconsiderandoCase("banana","BANANINHA"))

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoatual = Number(prompt("Qual o ano atual?"))
  let anonascimento = Number(prompt("Qual o ano do seu nascimento?"))
  let anoemissao = Number(prompt("Qual ano de emissão da sua carteira de identidade?"))

    let idade = anoatual-anonascimento
    let anovencimento = anoatual-anoemissao>=5
    let resultadojovens = idade && anovencimento
    if (idade <= 20) {
      console.log(resultadojovens)
    }

    idade = (anoatual-anonascimento>20)&&(anoatual-anonascimento<=50)
    anovencimento = anoatual-anoemissao>=10 
    let resultadoadulto = idade && anovencimento
    if (idade === true ) {
        console.log(resultadoadulto)
    }
  
    idade = anoatual-anonascimento
    anovencimento = anoatual-anoemissao>15
    let resultadoidoso = idade && anovencimento
    if (idade > 50) {
      console.log(resultadoidoso)
    }
    
  }
  console.log(checaRenovacaoRG())

// EXERCÍCIO 14         
 
function checaAnoBissexto(ano) {
  let primeiracondicao = (ano % 4 === 0)
  let segundacondicao = (ano % 100 === 0)
  let terceiracondicao = (ano % 400 === 0)
  let resultado = ((primeiracondicao === true) && (segundacondicao === false)) || (primeiracondicao, segundacondicao, terceiracondicao === true)

  console.log(resultado)
  return resultado
  
}
console.log(checaAnoBissexto(2012)) 


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let idade = prompt("Você tem mais de 18 anos?(sim ou não)")
  let ensino = prompt("Você possui esino médio completo?(sim ou não)")
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?(sim ou não)")
  let inscricaovalida = ((idade.includes("sim")) && (ensino.includes("sim")) && (disponibilidade.includes("sim")) === true)

  console.log(inscricaovalida)
}