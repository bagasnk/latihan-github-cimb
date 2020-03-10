// //2 jam pertama = 2.000 / jam
// //setelah 2 jam berubah menjadi 500 perak / jam


// // let durasi, biaya
// // durasi = 5
// // if(durasi > 2){
// //      biaya = durasi * 500
// // }else{
// //      biaya = durasi * 2000
// // }
// // console.log(biaya)

// // function Parkir(Durasi){
// //     if(Durasi <= 2){
// //         return 2000 * Durasi
// //         }
// //         return 2000 * 2 + ((Durasi-2) * 500 )
// //     }
// //     console.log(Parkir(3))


// // function maxDiff (arr){
// //     return Math.max(...arr) - Math.min(...arr)
// // }
// // console.log(maxDiff([5,19,2,3,7]))

// // inputArrayAngka = [5,19,2,3,7]
// // max = inputArrayAngka[0]
// // min = inputArrayAngka[0]
// // for (i = 0; i < inputArrayAngka.length; i++) {
// //     if (inputArrayAngka[i] > max) {
// //         max = inputArrayAngka[i]
// //     } else {
// //         max = max
// //     }
// // }
// // for (i = 0; i < inputArrayAngka.length; i++) {
// //     if (inputArrayAngka[i] < min) {
// //         min = inputArrayAngka[i]
// //     } else {
// //         min = min
// //     }
// // }
// // let hasil = max - min
// // console.log(hasil)




// // let inputArrayHuruf = ['a',]

// // let i, j, swap

// // for (i = 0; i < inputArrayHuruf.length; i++) {
// //     for (j = (i + 1); j < inputArrayHuruf.length; j++) {
// //         if (inputArrayHuruf[j] < inputArrayHuruf[i]) {
// //             swap = inputArrayHuruf[i]
// //             inputArrayHuruf[i] = inputArrayHuruf[j]
// //             inputArrayHuruf[j] = swap
// //         }
// //     }
// // }
// // ascending = inputArrayHuruf
// // console.log('2. Ascending  = ' + ascending)

// function HitungString (string){
//     for(let i = 0;i<input.length;i++){
//         return i
//         }
// }
// let input = 'abcde'
// console.log(HitungString(input))
    
    
arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
date = new Date();
tanggal = date.getDate();
bulan = date.getMonth();
tahun = date.getFullYear();
console.log((tanggal+"-"+arrbulan[bulan]+"-"+tahun));