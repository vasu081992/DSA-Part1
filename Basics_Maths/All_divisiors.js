function divisors(N){

  let divisors = []

for(i=1;i<=N;i++){
  if(N%i===0){
    divisors.push(i)
  }
}
return divisors
} 
console.log(divisors(36))
 

// above code TC is O(N)


// below one is optimized code 

function findDivisors(N) {

  let divisors = [];

  let sqrtN = Math.sqrt(N);


  for(i=1;i<=sqrtN;i++){
    if(N%i===0){
      divisors.push(i)
      if(i!==N/i){
      divisors.push(N/i)
    }
  }
  }

  return divisors;
}


console.log(findDivisors(36))