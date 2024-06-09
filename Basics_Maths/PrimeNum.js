function PrimeNum(N){  // TC is O(N)

  let count = 0

for(i=1;i<=N;i++){
  if(N%i===0){
    count+=1;
  }
}
if(count===2){
  return true
}
else{
  return false
}
} 
console.log(PrimeNum(13)) 

//optimizied 


function PrimeNum1(N){  

  let count = 0

  let sqrtNum = Math.sqrt(N)
for(i=1;i<=sqrtNum;i++){
  if(N%i===0){
    count++;

    if(i!==N/i){
      count++;
    }
  }
}
if(count===2){
  return true
}
else{
  return false
}
} 
console.log(PrimeNum1(13))  // here tc will be only O(sqrt(N))

