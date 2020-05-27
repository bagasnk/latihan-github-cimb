//Exercise 13 april
const arrayString = ([first,...line]) => first.toUpperCase() + line.join('').toLowerCase()
console.log(arrayString('bagas yafitra pandji')) 
console.log(arrayString('Bagas yafitra Pandji'))
console.log(arrayString('BAGAS'))
