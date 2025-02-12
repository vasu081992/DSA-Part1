

function Longest_aubarray_with_negatives(arr1,k1){

  let n = arr1.length; 
  let sum=0;
  let maxlen=0;

  let prefixSum =  new Map()

  for(i=0;i<n;i++){
 
   sum = sum + arr1[i]

   if(sum===k1){
    maxlen = Math.max(maxlen,i+1)
   }
   
   let rem = sum - k1; 

   if(prefixSum.has(rem)){
    let len = i - prefixSum.get(rem)
    maxlen = Math.max(maxlen,len)
  }

  if(!prefixSum.has(sum)){
    prefixSum.set(sum,i)
  }


  }
  return maxlen
}



let arr1 = [1, -2, 3, 4, -1, 2, 1, -5, 4];
let k1 = 5;

console.log(Longest_aubarray_with_negatives(arr1,k1))