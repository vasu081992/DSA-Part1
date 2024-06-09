//It is a phenomenon when a function calls itself indefinitely until a specified condition is fulfilled.


let count=0;
function Counter() {

  if(count===50) return; // base condition to end the recursion 

console.log(count);

count++; 

Counter()


}
Counter()
