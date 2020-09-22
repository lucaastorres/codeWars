function halvingSum(n) {
    var x = 0
    while (n >= 1) {
      x += n
      n = parseInt(n/2)   
    }
return x
}

console.log(halvingSum(25))