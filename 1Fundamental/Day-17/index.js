let arr = []
for (let i = 0; i < 5; i++) {
    arr.push(parseInt(Math.random() * 10))
}
console.log(arr)

// let newArr = arr.map((val, idx) => {
//     return val - 3
// })
// console.log(newArr)

// let newArr = arr.filter((val,idx,array) => {
//     return val <= 5
// })
// console.log(newArr)

// console.log(arr.find((val,idx,array) => {
//     return val < 3
// }))

// const repFind = (array,cb) => {

// }

// const repfil = (array,cb) => {
//     let result =[]
//     for(let i=0;i<array.length;i++){
//         if(cb(array[i],i,array) == true){
//             result.push(array[i])
//         }
//     }
//     return result
// }
// console.log(repfil([1,2,3,4,5],(val,idx,array) => {
//     return val <= array.length
// }))


// const repMap = (array, cb) => {
//     let result = []
//     for (let i = 0;i<array.length; i++){
//         result.push(cb(array[i],i,array))
//     }
//     return result
// }

// console.log(repMap([1,2,3,4,5],(val,idx,array) => {
//     return 3
// }))

