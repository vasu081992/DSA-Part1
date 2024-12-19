
// function printNumber(i,n) {

// if(i<1){
//   return
// }

//   console.log(i)

//   printNumber(i-1,n-1)


// }

// let n=5
// printNumber(n,n)


function PrintNum(i,n){
  
  if(i>n){
    return
  }

  console.log(n)

  PrintNum(i,n-1)
}


(PrintNum(1,25))



















// if(i<1) return; // base condition to end the recursion 

// let res='';

// console.log(res+i)

// printNumber(i-1,n)