function reverseNum(N){
  let reverseNum=0;

while(N>0){
  let lastdigit = N%10; // extract last digit in every iteration 
  reverseNum = (reverseNum*10) + lastdigit // will be 9 initally 
  N=Math.floor(N/10); //789/10 --> new N will be 78
}
return reverseNum
}

console.log(reverseNum(123456789)) 

