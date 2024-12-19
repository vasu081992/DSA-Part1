// function Palindrome(x){

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

// if(reverseNum===x){
//   return true
// }
// else{
//   return false

// }


// } 
// console.log(Palindrome(717))
 


function Palindrome(N){

  let originalNum = N;
  let reversedNum = 0;

  while(N>0){
  
    N1 = N%10;
    reversedNum=reversedNum*10+N1;
    N=Math.floor(N/10)
 
  }

  if(reversedNum===originalNum){
    console.log(`The given number ${originalNum} is a palindrome, since ${reversedNum} is same as its original num`)
  }
  else{
    console.log(`The given number ${originalNum} is not a palindrome`)

  }
return reversedNum;
}

console.log(Palindrome(8756398))