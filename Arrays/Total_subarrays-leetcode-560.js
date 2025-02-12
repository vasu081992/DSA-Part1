//Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

//A subarray is a contiguous non-empty sequence of elements within an array.



function Num_of_Subarrays(nums,k){

  let n = nums.length;


  let prefixSum = new Map()

  let count= 0; 

  let sum =0 ;


  prefixSum.set(0,1)

  for(let item of nums){
 
    sum = sum+item; 

    if(prefixSum.has(sum-k)){

      count = count + prefixSum.get(sum-k)
    }

    prefixSum.set(sum, (prefixSum.get(sum) || 0 + 1))
  }
  return count
  
}

let nums = [3, 4, 7, 2, -3, 1, 4, 2] 

let k = 7

console.log(Num_of_Subarrays(nums,k))