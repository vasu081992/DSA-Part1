// function armstrong(x){
//   let originalNumber = x;

//   let sum = 0;
//   while(x>0){

//     let lastdigit = x%10;
//     sum = sum + (lastdigit*lastdigit*lastdigit)
//     x=Math.floor(x/10)

//   }

// if(sum===originalNumber){
//   return true
// }
// else{
//   return false

// }


// } 
// console.log(armstrong(153))
 


function armstrong(N1){

let sum=0;

let originalNum= N1

while(N1>0){

  let lastdigit = N1%10;
  sum = sum+Math.pow(lastdigit,3)
  N1=Math.floor(N1/10)
}
if(originalNum===sum){
  console.log(`The number ${originalNum} is armstrong number`)
}
else{
  console.log(`The number ${originalNum} is not a armstrong number`)

}
return sum
}

console.log(armstrong(3710))