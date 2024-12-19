
// function SumofN(n){

//   if(n===0){
//     return 0
//   }

//   return n + SumofN(n-1)


// }

// let n=5
// console.log(SumofN(n))








//parmeterised way 
// function SumofNParamertizedofN(i,sum){

//   if(i<1){
//     return sum // this is final value returned as sum keeps adding up in initial recusive calls
     
//   }

//   return SumofNParamertizedofN(i-1,sum+i) // return is must here since the main fn returns another recursive function


// }

// let n1=5;
// console.log(SumofNParamertizedofN(n1,0))



// if(n===0) return 0;
// else{

//   return n + SumofN(n-1);

// }




// if(i<1){
 
//   console.log(sum)
//   return 
  
//    } 
  
//     SumofNParamertizedofN(i-1,sum+i)



function SumRecursion(N){

  if(N===0){
    return 0
  }
  return N + SumRecursion(N-1)
  
}

SumRecursion(5)