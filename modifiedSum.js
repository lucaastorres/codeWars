function modifiedSum(a, n) {
    return a.map(a => a**n).reduce((b , c) => b + c) - a.reduce((a,x) => a+x)
}

console.log(modifiedSum([1, 2, 3], 3))