let tanpaVokal
let inputHuruf = 'topi saya bulet'
let inputArrayAngka = [5, 3, 7, 9, 11, 4, 2, 10, 38, 702, 203, 18, 12, 65, 0, 3, 103]
let inputArrayHuruf = ['aji', 'abi', 'cinta', 'cano', 'zilb', 'lontong', 'ikan', 'item']
let inputArrayCampur = [5, 'abi', 'ajeng', 8, 9, 'cano', 'zilb', '2', 2, 4]
let i, j, swap
let bilangan, max
let ascending, discending
let arrayBaru = []

// // 1. Hapus huruf vocal

tanpaVokal = inputHuruf.replace(/[aiueo]/gi, '')
console.log('1. ' + tanpaVokal + ' \n')

// 2. sort array string (A-Z dan Z-A)

for (i = 0; i < inputArrayHuruf.length; i++) {
    for (j = (i + 1); j < inputArrayHuruf.length; j++) {
        if (inputArrayHuruf[j] < inputArrayHuruf[i]) {
            swap = inputArrayHuruf[i]
            inputArrayHuruf[i] = inputArrayHuruf[j]
            inputArrayHuruf[j] = swap
        }
    }
}
ascending = inputArrayHuruf
console.log('2. Ascending  = ' + ascending)

for (i = 0; i < inputArrayHuruf.length; i++) {
    for (j = (i + 1); j < inputArrayHuruf.length; j++) {
        if (inputArrayHuruf[j] > inputArrayHuruf[i]) {
            swap = inputArrayHuruf[i]
            inputArrayHuruf[i] = inputArrayHuruf[j]
            inputArrayHuruf[j] = swap
        }
    }

}
discending = inputArrayHuruf
console.log('   Discending = ' + discending + '\n')

// 3. sort array int (0-9 dan 9-0)

for (i = 1; i < inputArrayAngka.length; i++) {
    for (j = 0; j < i; j++) {
        if (inputArrayAngka[i] < inputArrayAngka[j]) {
            swap = inputArrayAngka[i]
            inputArrayAngka[i] = inputArrayAngka[j];
            inputArrayAngka[j] = swap
        }
    }
}
console.log('3. Ascending  = ' + inputArrayAngka)

for (i = 1; i < inputArrayAngka.length; i++) {
    for (j = 0; j < i; j++) {
        if (inputArrayAngka[i] > inputArrayAngka[j]) {
            swap = inputArrayAngka[i]
            inputArrayAngka[i] = inputArrayAngka[j];
            inputArrayAngka[j] = swap
        }
    }
}
discending = inputArrayAngka
console.log('   Discending = ' + discending + '\n')

// 4. display angka terbesar dalam array

max = inputArrayAngka[0]
for (i = 0; i < inputArrayAngka.length; i++) {
    if (inputArrayAngka[i] > max) {
        max = inputArrayAngka[i]
    } else {
        max = max
    }
}
console.log('4. ' + max + '\n')

// 5. ngefilter string (hanya bisa integer). output array hanya bisa string

for (i = 0; i < inputArrayCampur.length; i++) {
    if (typeof inputArrayCampur[i] === 'number')  {
        arrayBaru.push(inputArrayCampur[i])
    }
}
arrayBaru = arrayBaru.toString()
console.log('5. ' + arrayBaru + ' dengan tipe data : ' + typeof arrayBaru + '\n')


// // 6. hapus huruf awal dan akhir saja

console.log('6. ' + inputHuruf.slice(1, -1))



