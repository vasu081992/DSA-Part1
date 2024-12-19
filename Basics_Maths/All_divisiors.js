// function divisors(N){

//   let divisors = []

// for(i=1;i<=N;i++){
//   if(N%i===0){
//     divisors.push(i)
//   }
// }
// return divisors
// } 
// console.log(divisors(36))
 

// // above code TC is O(N)


// // below one is optimized code 

// function findDivisors(N) {

//   let divisors = [];

//   let sqrtN = Math.sqrt(N);


//   for(i=1;i<=sqrtN;i++){
//     if(N%i===0){
//       divisors.push(i)
//       if(i!==N/i){
//       divisors.push(N/i)
//     }
//   }
//   }

//   return divisors;
// }


// console.log(findDivisors(36))


function Divisors(N){

  let arr1=[]; 

  for(i=1;i<=N;i++){
    if(N%i===0){
      arr1.push(i)
    }
  }
return arr1;
}


console.log(Divisors(36))


//optimised solution 


function DivisorsOpti(N){

  let arr2=[]; 

  let sqrt = Math.sqrt(N)

  for(i=1;i<=sqrt;i++){
    if(N%i===0){
      arr2.push(i)
    if(i!==N/i){
      arr2.push(N/i)
    }
  }
}
return arr2;
}



console.log(DivisorsOpti(36))


//optimised 



