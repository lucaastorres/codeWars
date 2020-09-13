// My soluction, i can use Math but i'm not understand

function rgb(r, g, b){
   const x = a => {
        if(a <= 0)
        a = 0
        if(a > 255)
        a = 255
    return a.toString(16).padStart(2, '0')
    }
return arr = [r, g, b].map(el => el <= 255 && el > 0 ? el.toString(16).padStart(2, '0') : x(el)).join('').toUpperCase()  
}


// The best Soluction
function rgbx(r, g, b){
    return [r,g,b].map(function(x) {
      return ('0'+ Math.max(0, Math.min(255, x)).toString(16)).slice(-2)
    }).join('').toUpperCase()
  }

console.log(rgb(0, 0, 0))