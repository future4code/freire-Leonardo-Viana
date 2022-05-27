function calculaNota(ex, p1, p2) {
  let exercicio = ex
  let provaUm = p1*2
  let provaDois = p2*3
  let media = (exercicio+provaUm+provaDois)/6
  if(media>=9) {
    return "A"
  } else if(media<9 && media>=7.5) {
    return "B"
  } else if(media<7.5 && media>=6) {
    return "C"
  } else {
    return "D"
  }
}