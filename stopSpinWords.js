function spinWords(str){
    return str.split(' ').map(a => a.replace(a, b => b.length > 4 ? b.split('').reverse().join(''): b)).join(' ')
  }