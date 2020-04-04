let arr1 = [1,2,3,4,5,6]
let arr2 = [1,5,6,9,13,7]

const uniqueArr2 = (pertama,kedua) => {
    let arrCheck = []
    for(let i = 0; i < pertama.length; i++){
        if(!arrCheck.includes(pertama[i])){
            arrCheck.push(pertama[i])
        }
    }

    for(let j =0;j<kedua.length;j++){
        if(!arrCheck.includes(kedua[j])){
            arrCheck.push(kedua[j])
        }
    }
    return arrCheck
}
console.log(uniqueArr2(arr1,arr2))