function findOdd(A) {
    var count = {}
      A.forEach(function(A) {count[A] = ((count[A] || 0) + 1) & 1})
      
  var odd = Object.entries(count)
  
  for (let i in odd){
      if(odd[i][1] !== 0) 
    return Number(odd[i].shift()) 
    }
  }

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))