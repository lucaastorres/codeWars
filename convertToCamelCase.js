function toCamelCase(str){
    var re = /[-_]/
    str = str.split(re)
  
    function find(){
      return str[0].search(/^[A-Z]/)
    }
  if(find() == 0){
    return str.join().replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 1 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/,/g, '')
  }else {
    return str.join().replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/,/g, '')
  }
  
  }