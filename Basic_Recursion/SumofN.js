
function SumofN(n){

  if(n===0) return 0;
else{

  return n + SumofN(n-1);

}

}

let n=5
console.log(SumofN(n))

//parmeterised way 
function SumofNParamertizedofN(i,sum){

 if(i<1){
 
console.log(sum)
return 

 } 

  SumofNParamertizedofN(i-1,sum+i)
}

let n1=5;
SumofNParamertizedofN(n1,0)
