
function printNumber(i,n) {

if(i<1) return; // base condition to end the recursion 

let res='';

console.log(res+i)

printNumber(i-1,n)

}

let n=5
printNumber(n,n)