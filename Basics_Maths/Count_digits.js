function CountDigits(N){
  let count=0;

while(N>0){
  count+=1;
  N = Math.floor(N / 10);
}
return count
}

console.log(CountDigits(789)) 

//method2 
function CountDigits2(N){
  let count = Math.log10(N);
  let finalSol = Math.ceil(count)
return finalSol 
}

console.log(CountDigits2(789)) 