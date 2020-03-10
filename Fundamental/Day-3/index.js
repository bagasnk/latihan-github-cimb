/*
let input = 'hello world'
while (input){
    console.log('loop')
}
*/

/*
for (let i = 0; i < 5; i++){
    console.log('loop',[i])
}
*/


for(let i=1;i<=5;i++){
    let result = i
    for(let j = 1;j<=5;j++){
        result+=j
    }
    console.log(result)
}
