

function GCD (N1,N2){

  let gcd = 1; 

for(i=1;i<=Math.min(N1,N2);i++){ // here since it is greatest common factor (GCD), we need to run loop only till one of the smallest number. coz GCD cannot be greather than the one of the numbers at any case. 

  if (N1%i===0 && N2%i===0){

    gcd = i;
    
  }
}

return gcd

} 

console.log(GCD(12,9)) // tc = O(Min(N1,N2))


//OPTIMIZED 

function GCD2 (a,b){


while(a>0 && b>0){
  if(a>b){
    a=a%b;
  }
  else{
    b = b%a;
  }
}
if(a===0){
  gcd = b ; 
}
else{
  gcd = a;
}

return gcd;
}



console.log(GCD2(113,3))  // this is optimisied approach -- known as eucledian algorithm. TC will be O(log base phi min(a,b))
