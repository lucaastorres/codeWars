function highAndLow(numbers){
    var list = numbers.split(' ')
      var array = []
      
      for(let i = 0; i < list.length; i++){
          array[i] = parseInt(list[i]) 
      }
  
  var res = `${Math.max.apply(null, array)} ${Math.min.apply(null, array)}`
      return res
  }

console.log(highAndLow("1 2 3 4 5"))