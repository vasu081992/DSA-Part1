function LongestSubarray_2Pointer(arr2,k2){

  let n = arr2.length

  let left=0;
  let right=0;
  let sum=arr2[left]
  let maxCount=0;

  while(right<n){

   while(left<n && sum>k2){
  
       sum = sum - arr2[left];
       left++

   }
 
   if(sum===k2){
     maxCount = Math.max(maxCount,right-left+1)
   }
  
   right++

   if(right<n){ // this is needed as inside while loop we are incrementing right and so we need to check if right hasnt crossed n
   sum = sum + arr2[right]
   }

  }

  return maxCount

}
let arr2 = [1, -2, 3, 4, -1, 2, 1, -5, 4];
let k2 = 5;
console.log(LongestSubarray_2Pointer(arr2,k2))



function getLongestSubarray(a, k) {
  let n = a.length; // size of the array

  let preSumMap = new Map();
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
      // calculate the prefix sum till index i
      sum += a[i];

      // if the sum = k, update the maxLen
      if (sum === k) {
          maxLen = Math.max(maxLen, i + 1);
      }

      // calculate the sum of remaining part i.e. x-k
      let rem = sum - k;

      // calculate the length and update maxLen
      if (preSumMap.has(rem)) {
          let len = i - preSumMap.get(rem);
          maxLen = Math.max(maxLen, len);
      }

      // finally, update the map checking the conditions
      if (!preSumMap.has(sum)) {
          preSumMap.set(sum, i);
      }
  }

  return maxLen;
}

let a = [1, -2, 3, 4, -1, 2, 1, -5, 4];
let k = 5;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);


//longest sub array with negative nums - using two loops (same as positive nums code)


function LongestSubArray(arr3,k3){
   

  let n=arr3.length;
  let maxcount=0;
 
 
  for(i=0;i<n;i++){
    
   let count=1;
   let sum = arr3[i]
 
   for(j=i+1;j<n;j++){
  
     sum = sum + arr3[j]
     count++
 
   }
 
   if(sum===k3){
     if(count>maxcount){
       maxcount=count;
     }
   }
 
  }
  return maxcount
 }

 let arr3 = [1, -2, 3, 4, -1, 2, 1, -5, 4];
let k3 = 5;
console.log(LongestSubArray(arr3,k3))


//longest sub array with positive and negative nums (diff from positve code - we use hashmap ie js map here)



function getLongestSubarray_hashing(arr10, k10) {
  let n = a.length; // size of the array

  let preSumMap = new Map();
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
      // calculate the prefix sum till index i
      sum += arr10[i];

      // if the sum = k, update the maxLen
      if (sum === k10) {
          maxLen = Math.max(maxLen, i + 1);
      }

      // calculate the sum of remaining part i.e. x-k
      let rem = sum - k10;

      // calculate the length and update maxLen
      if (preSumMap.has(rem)) {
          let len = i - preSumMap.get(rem);
          maxLen = Math.max(maxLen, len);
      }

      // finally, update the map checking the conditions
      if (!preSumMap.has(sum)) {
          preSumMap.set(sum, i);
      }
  }

  return maxLen;
}

let arr10 = [1, -2, 3, 4, -1, 2, 1, -5, 4];
let k10 = 5;
let len1 = getLongestSubarray_hashing(arr10, k10);
console.log("The length of the longest subarray is:", len1);