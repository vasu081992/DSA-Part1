
function printNumberbackTrack(i,n) {

  if(i<1) return; // base condition to end the recursion 

printNumberbackTrack(i-1,n)

 console.log(i) // we do recursive function call above and then print here.. this is back tracking. function call happens till condition fails and then it returns till first and prints console line from printNumber(1,3) , printNumber(2,3) and printNumber (3,3)  ie 1 2 3 

 //but catch here is console.log comes after function call. and printing happens from reverse to first one by one on returning

}
let n=3
printNumberbackTrack(n,n)
