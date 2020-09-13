function score(dice){
    return Object.entries(dice.reduce((acc, i) => {
        acc[i] = (acc[i] || 0) + 1
        return acc
    },{}))
    .filter((a => a[0] === '1' || a[0] === '5' || a[1] >= 3))
    .map(a => a[0] === '1'|| a[0] === '5'? exceptions(a[0], a[1]) : a[0] * 100 )
    .reduce((acc, i) => acc + i,0) 
function exceptions(b, c) {
    if(b === '1') {
        return c >= 3 ? 1000 + (c - 3) * 100: c * 100
    }
    if(b === '5') {
        return c === 3 ? 500 + (c - 3):  c * 50
    }
}
}
console.log(score([4, 4, 4, 3, 3]))