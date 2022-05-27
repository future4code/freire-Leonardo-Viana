// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()        
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    novoArray = array.filter((a) => {
        if (a % 2 == 0) {
            return a
        }
    })
    return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    novoArray = array.filter((a) => {
        if (a % 2 == 0) {
            return a
        }
    })
    novoArrayQuadrado = novoArray.map((a) => {
        return a ** 2
    })
    return novoArrayQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for (i = 0; i < array.length; i++)
        if (array[i] > maior) {
            maior = array[i]
        }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero
    if (num1 > num2) {
        maiorNumero = num1
    } else {
        maiorNumero = num2
    }

    let menorNumero
    if (num1 < num2) {
        menorNumero = num1
    } else {
        menorNumero = num2
    }

    let maiorDivisivelPorMenor
    if (maiorNumero % menorNumero == 0) {
        maiorDivisivelPorMenor = true
    } else {
        maiorDivisivelPorMenor = false
    }

    let diferenca = maiorNumero - menorNumero

    let objeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }

    return objeto

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let novoArray = []
    for (i = 0; n > novoArray.length; i = i + 2) {
        novoArray.push(i)
    }
    return novoArray
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoB == ladoC) {
        return "Equilátero"
    } else if (ladoA !== ladoB && ladoC !== ladoB && ladoA !== ladoC) {
        return "Escaleno"
    } else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    for (i = 0; i < array.length; i++) {
        maior = array[0]
        if (array[i] > maior) {
            maior = array[i]
        }
    }

    segundoMaior = array[0]
    for (i = 0; i < array.length; i++) {
        if (array[i] > segundoMaior && array[i] < maior) {
            segundoMaior = array[i]
        }
    }

    menor = array[0]
    for (i = 0; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i]
        }
    }
    array.splice(array.indexOf(menor), 1)


    let segundoMenor = array[0]
    for (i = 0; i < array.length; i++) {
        if (array[i] < segundoMenor ) {
            segundoMenor = array[i]
        }
    }



   
     return [segundoMaior, segundoMenor]

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    novoObjeto = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let temPermissao = pessoas.filter((a) => {
        if (a.altura >= 1.5 && a.idade > 14 && a.idade < 60) {
            return a
        }
    })
    return temPermissao
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let naoTemPermissao = pessoas.filter((a) => {
        if (a.altura < 1.5 || a.idade <= 14 || a.idade >= 60) {
            return a
        }
    })
    return naoTemPermissao
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let compra = contas.map((a) => {
        return a.compras
    })


    let totalCompras = compra.map((a) => {
        for (i = 0; i <= a.length; i++) {
            soma = 0
            for (i = 0; i < a.length; i++) {
                soma += a[i]
            }
        }
        return soma
    })

    let saldos = contas.map((a) => {
        return a.saldoTotal
    })

    for (i = 0; i < saldos.length; i++) {
        saldos.splice(i, 1, (saldos[i] - totalCompras[i]))
    }

    let novoArray = contas.map((a, indice) => {
        a.saldoTotal = saldos[indice]
        a.compras = []

        return a
    })

    return novoArray



}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

    function compare(a, b) {
        if (a.nome < b.nome)
            return -1;
        if (a.nome > b.nome)
            return 1;
        return 0;
    }

    return consultas.sort(compare)

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    function compare(a, b) {
        if (a.dataDaConsulta < b.dataDaConsulta)
            return -1;
        if (a.dataDaConsulta > b.dataDaConsulta)
            return 1;
        return 0;
    }
    return consultas.sort(compare)

}