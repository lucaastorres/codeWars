function partsSums(ls) {
    let arr = ls.reduce((sum, n) => sum + n, 0)
    res  = [arr]
    for (let i = 1; i <= ls.length; i++){
        arr -= ls[i-1]
        res.push(arr)
    }
    return res
}

console.log(partsSums([1, 2, 3, 4, 5, 6]))