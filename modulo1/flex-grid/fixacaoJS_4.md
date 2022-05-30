function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let numeroAparece = 0
for(n=0; n<arrayDeNumeros.length; n++) {
  if (numeroEscolhido==arrayDeNumeros[n]) {
    numeroAparece++
  } 
}
if(numeroAparece>0){
return `O número ${numeroEscolhido} aparece ${numeroAparece}x`
} else{
    return "Número não encontrado"
    }
}