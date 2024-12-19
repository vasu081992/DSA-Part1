// function PrimeNum(N){  // TC is O(N)

//   let count = 0

// for(i=1;i<=N;i++){
//   if(N%i===0){
//     count+=1;
//   }
// }
// if(count===2){
//   return true
// }
// else{
//   return false
// }
// } 
// console.log(PrimeNum(13)) 

// //optimizied 


// function PrimeNum1(N){  

//   let count = 0

//   let sqrtNum = Math.sqrt(N)
// for(i=1;i<=sqrtNum;i++){
//   if(N%i===0){
//     count++;

//     if(i!==N/i){
//       count++;
//     }
//   }
// }
// if(count===2){
//   return true
// }
// else{
//   return false
// }
// } 
// console.log(PrimeNum1(13))  // here tc will be only O(sqrt(N))



//Brute force 

function Prime(N){

  let count = 0;

  for(i=2;i<=N;i++){
    if(N%i===0){
       count=count+1
    }
  }
  if(count===1){
    console.log(`Number ${N} is a prime number`)
  }
  else{
    console.log(`Number ${N} is not a prime number`)

  }
  return count
}

console.log(Prime(1483))



//prime optimised


function PrimeOptimised(n){

  let count=0;

for(i=1;i<=Math.sqrt(n);i++){

  if(n%i===0){
    count=count+1;
  
    if(n/i!==i){
      count=count+1;
    }
}

}
if(count===2){
  console.log(`Number ${n} is a prime number`)
}
else{
  console.log(`Number ${n} is not a prime number`)

}
return count
}


console.log(PrimeOptimised(19))
