function reverseNum(x){

  let isNegative = x < 0;

  N = Math.abs(x)
  let reverseNum=0;
const INT_MAX = 2147483647;
const INT_MIN = -2147483648;
  while(N>0){

    let lastdigit = N%10;
 if(reverseNum*10 > INT_MAX || reverseNum*10 === INT_MAX ){
            return 0 ;
        }
         
        if(reverseNum*10 < INT_MIN || reverseNum*10 === INT_MIN){
            return 0 ;
        }
    reverseNum = (reverseNum*10) + lastdigit
    N=Math.floor(N/10)
  }
  return isNegative ? -reverseNum : reverseNum;
} 

console.log(reverseNum(1122344412) )

