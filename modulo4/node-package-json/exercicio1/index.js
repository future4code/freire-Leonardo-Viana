import chalk from 'chalk'

chalk.level = 1

// 1- a) "node index.js"

// b)


// c)
const novaIdade = Number(process.argv[3]) + 7



if ( process.argv[3] == undefined ) {
    console.log(chalk.red("Esperava 2 parâmetros"))
} else if ( typeof(novaIdade) !== 'number' ) {
    console.log(chalk.red("O segundo parametro deve ser um número"))
} else {
    // b)
    console.log(chalk.blue("Olá,", process.argv[2],  "! Você tem", process.argv[3], "anos."))
    // c)
    console.log(chalk.green("Olá,", process.argv[2], "! Você tem", process.argv[3], "anos. Em sete anos você terá", novaIdade))
}



