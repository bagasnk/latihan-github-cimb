   
let j = 0
let len = 50
for(let i = 1; i<=len; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz') 
        j++
        if(j == 2){
            continue //hampir sama dengan break
        }
            console.log('Bilangan di atas bukan FizzBuzz kedua')
    }else if(i % 3 == 0){
        console.log('Fizz')
    }else if(i % 5 == 0){
        console.log('Buzz')
    }else{
        console.log(i)
    }
}    