

// function GCD (N1,N2){

//   let gcd = 1; 

// for(i=1;i<=Math.min(N1,N2);i++){ // here since it is greatest common factor (GCD), we need to run loop only till one of the smallest number. coz GCD cannot be greather than the one of the numbers at any case. 

//   if (N1%i===0 && N2%i===0){

//     gcd = i;
    
//   }
// }

// return gcd

// } 

// console.log(GCD(12,9)) // tc = O(Min(N1,N2))


// //OPTIMIZED 

// function GCD2 (a,b){


// while(a>0 && b>0){
//   if(a>b){
//     a=a%b;
//   }
//   else{
//     b = b%a;
//   }
// }
// if(a===0){
//   gcd = b ; 
// }
// else{
//   gcd = a;
// }

// return gcd;
// }



// console.log(GCD2(113,3))  // this is optimisied approach -- known as eucledian algorithm. TC will be O(log base phi min(a,b))


//brute force
function GCD(N1,N2){

  let gcd = 1 ;

  for(i=1;i<Math.min(N1,N2);i++){ // here since it is greatest common factor (GCD), we need to run loop only till one of the smallest number. coz GCD cannot be greather than the one of the numbers at any case.

    if((N1%i===0)&&(N2%i===0)){
 
       gcd = i;
    }
  }
  return gcd
}

console.log(GCD(1000,10000))

//optimum approach
                            
// function findGcd(a, b) {
//   // Continue loop as long as both
//   // a and b are greater than 0
//   while (a > 0 && b > 0) {
//       // If a is greater than b,
//       // subtract b from a and update a
//       if (a > b) {
//           // Update a to the remainder
//           // of a divided by b
//           a = a % b;
//       }
//       // If b is greater than or equal
//       // to a, subtract a from b and update b
//       else {
//           // Update b to the remainder
//           // of b divided by a
//           b = b % a;
//       }
//   }
//   // Check if a becomes 0,
//   // if so, return b as the GCD
//   if (a === 0) {
//       return b;
//   }
//   // If a is not 0,
//   // return a as the GCD
//   return a;
// }

// // Set the values of n1 and n2
// let n1 = 80, n2 = 130;

// // Find the GCD of n1 and n2
// let gcd = findGcd(n1, n2);

// // Output the result
// console.log("GCD of", n1, "and", n2, "is:", gcd);

                          

function findGCDOpti(a,b){

while(a>0 && b>0){
  if(a>b){
    a=a%b;
  }
  else{
    b=b%a
  }
}
if(a===0){
  return b
}
else{
  return a
}
}
                      


console.log(findGCDOpti(125,50))