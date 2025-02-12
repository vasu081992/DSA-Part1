//Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

//A subarray is a contiguous non-empty sequence of elements within an array.



function Num_of_Subarrays(nums,k){

  let n = nums.length;


  let prefixSum = new Map()

  let count = 0; 

  let sum = 0 ;


  prefixSum.set(0,1) // we use this to increment count whenver 0 is encountered

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


//revisit of same problem 



function Subarray_count(arr2,k2){

  let map1 = new Map() 

  let count = 0 

  let sum = 0 
 
  map1.set(0,1) 

  for(let num of arr2){
    sum = sum + num; 
    
     if(map1.has(sum-k2)){
      count = count + map1.get(sum-k2)
     }
   
     map1.set(sum, (map1.get(sum) || 0 + 1 ))
  }
  return count
}

let arr2 = [2,3,5,2,2,1]
let k2 = 5

console.log(Subarray_count(arr2,k2))


