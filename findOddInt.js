function findOdd(A) {
    var count = {}
      A.forEach(function(A) {count[A] = ((count[A] || 0) + 1) & 1})
      
  var odd = Object.entries(count)
  
  for (let i in odd){
      if(odd[i][1] !== 0) 
    return Number(odd[i].shift()) 
    }
  }