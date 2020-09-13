function pigIt(str){
    const end = str.charAt(str.length-1)
    str = str.split(' ').map(a => a.slice(1) + (a.slice(0, 1) + "ay")).join(' ')
    return end === "!" || end === "?"? str.slice(0, str.length-3) + end: str
        
    
}