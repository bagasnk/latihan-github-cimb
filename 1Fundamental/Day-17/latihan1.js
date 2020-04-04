//DigitalRoot (number)

// const digital_root = (input) => {
//     return (input - 1) % 9 + 1;
//   }


const digital_root = (number) => {
    while(number>9){
        let splitNum = number.toString().split('')
        splitNum = splitNum.map(Number)

        let result = 0
        for(let i = 0; i<splitNum.length; i++){
            result += splitNum[i]
        }
        number = result
    }
    return number
}
console.log(digital_root(942))