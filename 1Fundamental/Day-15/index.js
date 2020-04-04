let arr = [1,2,3,4,5]
arr.forEach((val,idx,arr) => {
    // iterasi = 2
    // val = 2
    // idx =1
    // arr = [1,2,3,4,5]
    console.log(val.idx,arr)
})

const forEachRep = (array,cb) => {
    for(let i = 0; i<array.length; i++){
        cb(array[i],i,array)
    }
}

// -------------for each------------------
// forEachRep(arr, (param1,param2,param3) => {
//     console.log(param1,param2,param3)
// })

// ---------------for of------------------
// for (let item of arr) {
//     console.log(item)
// }

// for (let i = 0 ; i < arr.length; i++){
//     arr[i]
// }

//----------------- for in------------------
let saya ={
    nama: 'Theo',
    pekerjaan: 'Pengajar',
    status: 'Sehat'
}

for(let key in saya){
    console.log(key, saya[key])
}
//--------------------------------------------

// console.log(saya['nama'])
