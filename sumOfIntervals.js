function sumIntervals(intervals){
arr = []
    intervals.forEach(a => {
      for (let c = a[0]; c < a[1]; c++) {
        arr.push(c)
        console.log(c)
      }
    })
arr = [...new Set(arr)]
return arr.length
}

console.log(sumIntervals([
    [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
 ]))