var countBits = function(n) {
    var num = parseInt(n)
      if(num < 0) {   
          console.log("Insert a non-negative Number")
      } else if(num == 0 ){
          var count = 0
          return count
  
      } else {
          count = 1
  
          while (num > 1) {
              
              if(num % 2 == 1) {
                  num--
                  num /= 2
                  count++
              } else {
                  num /= 2
              }
          
          }
      }
      return count
  };