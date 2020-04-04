const array = [80,80,50]
//0-59 = f
//60-69 = d
//70-79 = c
//80-89 = b
//90-100 = a
console.log(calculateGrade(array))

function calculateGrade(marks){
    let avg = calculateAverage(marks)
    
    if(avg< 60) return 'F'
    if(avg< 70) return 'D'
    if(avg< 80) return 'C'
    if(avg< 90) return 'B'
    else return 'A'
}

function calculateAverage(array){
    let sum = 0 
    for(i=0;i<array.length;i++){
        sum += array[i]
    }
    return sum / array.length
}
