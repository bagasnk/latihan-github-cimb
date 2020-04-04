// let arr = ['Jeruk','Mangga','Apel', 3, true, undefined, null]
// // console.log(arr)
// console.log(arr.length)

// let text = 'abcdefghij  '
// // console.log(text.slice(2, 6)) // IRIS

//  console.log(text.trim().length) // MENGHILANGKAN SPASI BARIS 

// arr.push('Lukmanemon')   // menambahkan isi array
// console.log(arr[2].slice(3,4), arr[5])

// arr[4] = 'Mama lemon'
// console.log(arr)

// arr[arr.length] = 'halo'
// console.log(arr)

// let arrNumbers = [3, 7 ,6 ,9 ,5]
// let i
// let total = 0
// ////////////////////////////////cara pertama//////////////////////////
// // for(i=0;i<arrNumbers.length;i++){
// //     total += arrNumbers[i]
// // }
// // console.log(total)
// /////////////////////////////////cara kedua///////////////////////////
// arrNumbers.forEach(function(val){
//     total = total+val
//  //   console.log(total)
//     })
// ////////////////////////////////cara ketiga///////////////////////////
// // for (let i of arrNumbers){
// //     console.log(i)
// // }
// ///////////////////////////////cara keempat///////////////////////////

// // console.log(arrNumbers.reduce{(a,b) => a + b})


// let string = 'The quick brown fox'
// console.log(string.split(' '))  // per kata

// console.log(string.split(''))  // per huruf

let arrBaru = ['Text','String','Tulisan','Doraemon']
// let tulisan = arrBaru.indexOf('Tulisan') // mencari index
// console.log(tulisan)
arrBaru.splice(-2, 1)  // hampus isi index
console.log(arrBaru)

