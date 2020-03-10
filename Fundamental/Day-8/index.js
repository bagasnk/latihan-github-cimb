// // arrbulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
// //     date = new Date()
// //     tanggal = date.getDate()
// //     bulan = date.getMonth()+1
// //     tahun = date.getFullYear()
// //     dateNow = (tanggal + "-" + bulan + "-" + tahun)

// //     console.log(dateNow)



// // ---------------------------- Menghitung huruf total penjumlahan --------------------------------
// // const alpaValue = (str) => {
// //     let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
// //     let result = 0
// //     for(i=0;i<str.length;i++){
// //         result += (alpArray.indexOf(str[i])+1)
// //     }
// //         return result
// // }
// // console.log(alpaValue('acbdefghijklmn'))


// // ------------------------------ Menghitung huruf total penjumlahan huruf ganjil -----------------
// // const alpaValue = (str) => {
// //     let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
// //     let result = 0
// //     for (i = 0; i < str.length; i++) {
// //         if (alpArray.indexOf(str[i])%2 == 0){
// //             result += (alpArray.indexOf(str[i]) + 1)
// //          }
// //     }
// //     return result

// // }
// // console.log(alpaValue('abc'))

// // -----------------------------

// const alpaValue = (str) => {
//     let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let result = ''
//     for(i=0;i<str.length;i++){
//         result = result.toString() + ((alpArray.indexOf(str[i])+1))
//     }
//         return result
// }
// console.log(alpaValue('abcd'))

// class Product {
//     constructor(Nama, Harga, Stock) {
//         this.Nama = Nama
//         this.Harga = Harga
//         this.Stock = Stock
//     }
// }

// let arr = [
//     new Product('apel', 1000, 10),
//     new Product('apple', 2000, 15),
//     new Product('sapi', 3000, 5),
//     new Product('jeble', 4000, 7),
//     new Product('apeh',6000,20)
// ]


// const filterValues = str => {
//     return arr.filter((value) => value.Nama.toLowerCase().includes(str))
//     }

// console.log(filterValues('le'));

// const searchProductPrice = (min,max) => {
//     return arr.filter(val => val.Harga >= min && val.Harga <= max)
// }
// console.log(searchProductPrice(2000,4000))

//object distraction

// let a = {
//     nama : 'Doraemon',
//     asal : 'Jepang',
//     kontak : {
//         rumah : 'Di rumah',
//         kota : 'BSD'
//     }
//}

// let {nama, asal, kontak:{rumah,kota}} = a
// const tampiNama = ({ nama, asal }) => {
//     return nama
// }

// console.log(a)


let resultnegatif = 0, resultpositif = 0
let i
const arrayInt = number => {
    for (i = 0 ; i < number.length ; i++){
        if(number[i] > 0){
            resultpositif += number[i]
        }
        if(number[i] < 0){
            resultnegatif += number[i]
        }
    }
    console.log([resultpositif,resultnegatif])
}
arrayInt([-7,5,2,-2,1,-13])






