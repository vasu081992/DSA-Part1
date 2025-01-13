function Num_appearing_once_hashing(arr3){
 
  let n=arr3.length;

  let max = -Infinity; // Initialize max to the smallest possible value
  let min = Infinity;  // Initialize min to the largest possible value

  //finding max elem of array used for creating a hash array
 if(n===1){
  return arr3[0]
 }
 else{
  for(let item of arr3){
    if(item>max){
      max=item
    }
    if (item < min) {
      min = item;
    }
  }

  const offset = Math.abs(min); // this makes negative to positive number

  let hash1= new Array(max+offset+1).fill(0)


  
  for(let i=0;i<n;i++){
    hash1[arr3[i]+offset]++
  }


  for(let i=0;i<arr3.length;i++){
    if(hash1[arr3[i]+offset]===1){
      return arr3[i]
    }
  }
 }
  
}
let arr3 = [-1,,-2,-3,-1,-3]
console.log(Num_appearing_once_hashing(arr3))