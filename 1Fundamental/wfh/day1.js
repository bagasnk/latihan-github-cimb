const tripleTrouble = (one, two, three) => {
  //     // Buatlah sebuah function yang menerima 3 string 
  //     // dan setiap string memiliki panjang yang sama
  //     // Input: "aa", "bb", "cc"
  //     // Output: "abcabc"
  //   ​
  //     // Input: "ab", "cd", "ef"
  //     // Output: "acebdf"
  let i
  let output = ''
  if ((one.length == two.length) && (one.length == three.length) && (two.length === three.length)) {
    for (i = 0; i < one.length; i++) {
      output = output + one[i] + two[i] + three[i]
    }
    return output
  }
}

const altCaps = (string) => {
  // Buatlah sebuah function yang menerima sebuah string
  // Outputnya sebuah array yang index pertama adalah semua 
  // huruf yg posisinya ganjil menjadi kapital, index kedua
  // semua huruf yg posisinya genap jadi kapital

  // Input: "abcdef"
  // Output: ["AbCdEf", "aBcDeF"]

  outputIndexPertama = ''
  outputIndexKedua = ''
  let i
  for (i = 0; i < string.length; i++) {
    if (i % 2 == 0) {
      outputIndexPertama = outputIndexPertama + string[i].toUpperCase()
      outputIndexKedua = outputIndexKedua + string[i].toLowerCase()
    } else {
      outputIndexPertama = outputIndexPertama + string[i].toLowerCase()
      outputIndexKedua = outputIndexKedua + string[i].toUpperCase()

    }
  }
  return [outputIndexPertama, outputIndexKedua]
}

console.log('nomor 1 : ')
console.log(altCaps('abcdef'))
console.log('\nnomor 2 :')
console.log(tripleTrouble('aa','bb','cc'))
console.log(tripleTrouble('ab','cd','ef'))