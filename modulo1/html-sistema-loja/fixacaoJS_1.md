function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let salario = 2000 
  let comissaoPorCarro = 100*qtdeCarrosVendidos + 0.05*valorTotalVendas
  salario = salario + comissaoPorCarro
  return salario
}