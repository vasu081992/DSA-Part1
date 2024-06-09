//recurisve way

function Factorial(n){

  if(n===0) return 1;
else{

  return n * Factorial(n-1);

}

}

let n=10
console.log(Factorial(n)) 


//iterative way - normal way without recursion


function FactorialRecurIterative(n1){

  let fact = 1; 

  for(i=1;i<=n1;i++){
    fact=fact*i;
  }

  return fact;


}

let n1=5;
console.log(FactorialRecurIterative(5))