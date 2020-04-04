arrNama = ['Abi','Tono','Tini','Cari','Carl']
arrUmur = [10,20,30,40,50]
arrPekerjaan = ['Bayi','SMA','Nganggur','Pensiun','Dokter']
// // // arrTelp = ['0822161333','0822323232',['2093772323','0822162662'],'2334235232' ,' 082232323' ]
// // let menu = ''

// // // for (i = 0; i < arrNama.length; i++) {
// // //     menu += (i+1 + '.Nama : ' + arrNama[i] + '\n' + 
// // //                               '  Umur : ' + arrUmur[i] + '\n' +
// // //                               '  Pekerjaan : ' + arrPekerjaan[i] + '\n' +
// // //                               '  No Telp : ' + arrTelp[i] + '\n')
                            
// // // }
// console.log(arrTelp[2][0])
let result 
arrData = [arrNama,arrUmur,arrPekerjaan]
for (i=0;i<arrData.length;i++){
    result = ''
    for (j=0;j<arrData[i].length;j++){
    result += arrData[i][j] + ' '
   
    }
console.log(result)
}

// let mobil = {
//     warna : 'Merah',
//     tahun : '2018 ',
//     merk : 'Honda',
// }

// mobil.tipe = 'Sedan'
// mobil.warna = 'Biru'
// mobil.tipeBan = 'off road'

// // let inputanUser = 'warna'
// console.log(mobil)

// let karyawan = {
//     nama : 'Seto',
//     umur : 37,
//     Pekerjaan : 'Developer',
//     contactDetails : {
//         alamat: "GOP 9",
//         nomorTelfon: ['081234','084321']
//     } 
// }

// console.log(karyawan.contactDetails.nomorTelfon[1])