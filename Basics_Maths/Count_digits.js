// function CountDigits(N){
//   let count=0;

// while(N>0){

//   N = Math.floor(N / 10);

//   count+=1;
// }
// return count
// }

// console.log(CountDigits(789)) 

// //method2 
// function CountDigits2(N){
//   let count = Math.log10(N);
//   let finalSol = Math.ceil(count)
// return finalSol 
// }

// console.log(CountDigits2(789)) 

//method 1 


function CountDigits (N){
  let count = 0; 
   while(N>0){
    N = Math.floor(N/10) //Math.floor takes the nearest lower integer
    count++; 
   }
   return count;

}

console.log(CountDigits(11112255))


//method2 

function CountDigitsMethod2 (N){

  let count = Math.ceil(Math.log10(N)) //Math.ceil takes the next higher integer

  
return count

}

console.log(CountDigitsMethod2(58698752369))


