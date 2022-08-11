// console.log("teste")

// const company: string = "Labenu"
// let age: number = 19
// let passwordCorrect: boolean = false


// const array: number[] = [1,2,3,4,5]


// const person: {name: string, age: number } = {
//     name: "Leo",
//     age: 19
// }

// let aux: any
// aux = 10
// aux = "dez"
// aux = true


// function sum (n1: number, n2: number) : number {
//     return (n1+n2)
// }

// console.log(sum(5,6))


// function sayHello(name?: string): void {
//     console.log("Hello,", name || "World")
//     }

function checaTriangulo(a: number, b: number, c: number) : string {
    if(a !== b && b !== c) {
        return "Escaleno"
    } else if (a === b && b === c) {
        return "Equilátero";
      } else {
        return "Isósceles";
      }
} 


function imprimeTresCoresFavoritas(): void {
    const cor1 = prompt("Insira sua primeira cor favorita")
    const cor2 = prompt("Insira sua segunda cor favorita")
    const cor3 = prompt("Insira sua terceira cor favorita")
    console.log([cor1, cor2, cor3])
}


function checaAnoBissexto(ano: number): boolean {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
}


function comparaDoisNumeros(num1: number, num2: number ): number {
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
  }


  function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number ): string {
    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao
   
     if(idade <= 20 ) {
         return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
       
      }else if(idade >= 20 || idade <= 50) {
         return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
       
      }else if(idade > 50) {
         return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
       
       }else {
           return "error"
       }
   }

  