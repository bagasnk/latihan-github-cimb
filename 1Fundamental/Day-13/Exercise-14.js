
// const mumble = (str) => {
//     var arr = str.split('')
//     var newArr = []

//     for(var i = 0 ; str.length; i ++){
//         var upCase = arr[i].toUpperCase()
//         newArr.push(upCase)
//         for(k=0;k<i;k++){
//             newArr.push(arr[i].toLowerCase())
//         }
//         if(i==str.length -1){
//             break;
//         }
//         newArr.push('-')
//     }
//     return newArr.join('')

// }

// console.log(mumble('hello'))

// function myFunc(arg) {
//     console.log(`arg was => ${arg}`);
//   }
  
//   setTimeout(myFunc, 15000, 'funky');

function intervalFunc() {
    console.log('Waktu pembayaran telah habis silahkan ulangi kembali');
  }
  setInterval(intervalFunc, 1500)
  
  
