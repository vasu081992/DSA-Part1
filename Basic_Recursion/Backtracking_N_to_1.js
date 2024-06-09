
function printNumberbackTrack(i,n) {
 
  if(i>n){
    return
  }

  printNumberbackTrack(i+1,n)

  console.log(i)

 
}
let n=3
printNumberbackTrack(1,n)





// if(i>n) return; // base condition to end the recursion 


// printNumberbackTrack(i+1,n)

// console.log(i) // we do recursive function call above and then print here.. this is back tracking. function call happens till condition fails and then it returns till first and prints console line 

// //but catch here is console.log comes after function call. and printing happens from reverse to first one by one on returning