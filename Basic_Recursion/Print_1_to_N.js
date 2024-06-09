
function printNumber(i,n) {

if(i>n){
  return
}
  console.log(i)
  printNumber(i+1,n)

}
let n=3
printNumber(1,n)



// if(i>n) return; // base condition to end the recursion 

// console.log(i)

//  printNumber(i+1,n)