const sumConsecutives = s => 
    s.reduce((acc, el, i, arr) => {
        if(el !== arr[i - 1]) acc.push(el)
        else acc[acc.length - 1] += el
        return acc
}, [])

console.log(sumConsecutives([1,4,4,4,4,3,3,1]))