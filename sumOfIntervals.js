// function sumIntervals(intervals) {
//     // var list = intervals
//     // intervals.map(el => {
//     //     console.log('ok2')
//     //     for(let i = 0; i < list[0].length; i++){
//     //         if(el[0] == 1){
//     //             console.log('ok1')
//     //         }
//     //     }
//     // }) 
//     finalArr = []
//     intervals.forEach(e => {
//         for (let i = e[0]; i < e[i]; i++) {
//             finalArr.push(i)
//         }
//     })
//     finalArr = [...new Set(finalArr)]
//     return finalArr.length
// }

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