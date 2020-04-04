const SegitigaKiri = (size) => {
    var arr = []
    for (var i = 0; i < size; i++) {
        arr[i] = []
        for (var j = 0; j < i + 1; j++) {
            arr[i][j] = j + 1
        }
    }
    return arr

}

const SegitigaKiriGanjil = (size) => {
    var ganjil = 1
    var arr = []
    for (var i = 0; i < size; i++) {
        arr[i] = []
        for (var j = 0; j < i + 1; j++) {
            arr[i][j] = ganjil
            ganjil += 2
        }
    }
    return arr
}

let result = []
let temp = []
let index = 0
let newTemp = []
const SegitigaFibbonaci = (size) => {
    for (let i = 0; i < size; i++) {
        let arr = []
        for (let j = 0; j <= i; j++) {
            if (i == 0) {
                newTemp[index] = 0
                temp[j] = newTemp[index]
                arr.push(temp[j])
                index++
            }
            else if (i == 1) {
                newTemp[index] = 1
                temp[j] = newTemp[index]
                arr.push(temp[j])
                index++
            }
            else {
                newTemp[index] = newTemp[index - 1] + newTemp[index - 2]
                temp[j] = newTemp[index]
                arr.push(temp[j])
                index++
            }
        }
        result.push(arr)
    }
    return result
}


const SegitigaPascal = (size) => {
    var arr = []
    for (var i = 0; i < size; i++) {
        arr[i] = []
        for (var j = 0; j < i + 1; j++) {
            if (j == 0 || j == i) {
                arr[i][j] = 1
            } else {
                arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
            }
        }
    }
    return arr
}


console.log(SegitigaKiri(6))
console.log(SegitigaKiriGanjil(5))
console.log(SegitigaFibbonaci(6))
console.log(SegitigaPascal(6))