// function reverseNum(x){

//   let isNegative = x < 0;

//   N = Math.abs(x)
//   let reverseNum=0;
// const INT_MAX = 2147483647;
// const INT_MIN = -2147483648;
//   while(N>0){

//     let lastdigit = N%10;
//  if(reverseNum*10 > INT_MAX || reverseNum*10 === INT_MAX ){
//             return 0 ;
//         }
         
//         if(reverseNum*10 < INT_MIN || reverseNum*10 === INT_MIN){
//             return 0 ;
//         }
//     reverseNum = (reverseNum*10) + lastdigit
//     N=Math.floor(N/10)
//   }
//   return isNegative ? -reverseNum : reverseNum;
// } 

// console.log(reverseNum(1122344412) )



// function reverseDigits(N) {
//   let reversedDigits = [];
  
//   while (N > 0) {
//     let digit = N % 10;    // Get the last digit
//     reversedDigits.push(digit);  // Store it in the array
//     N = Math.floor(N / 10);  // Remove the last digit from N
//   }
  
//   return typeof(Number(reversedDigits.join('')))


// }


// console.log(reverseDigits(158968)); // Output: [8, 6, 9, 8, 5, 1]


function Reverse(N){

  let revNum = 0;

  while(N>0){

let N1 = N%10

 revNum = revNum*10 + N1 // HERE we are keep appending the number to revNum every time

 N = Math.floor(N/10)


}

return revNum
}

console.log(Reverse(189560))



//method2 


// function Reverse2(N){

//   let arr = [];

//  while(N>0){
//   N1 = N%10
//   arr.push(N1)

//   N = Math.floor(N/10)
//  }

// return Number(arr.join(''))

// }


// console.log(Reverse2(85369))