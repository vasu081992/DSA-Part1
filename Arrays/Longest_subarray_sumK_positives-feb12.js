
// Burte force approach - with two loops - feb12 



function LongestSubArray(arr1,k1){
   

 let n=arr1.length;
 let maxcount=0;


 for(i=0;i<n;i++){
   
  let count=1;
  let sum = arr1[i]

  for(j=i+1;j<n;j++){
 
    sum = sum + arr1[j]
    count++

  }

  if(sum===k1){
    if(count>maxcount){
      maxcount=count;
    }
  }

 }

 return maxcount
}



let arr1 = [1,3,4,7,1,8,2,2,2,2]
let k1 = 8;

console.log(LongestSubArray(arr1,k1))
// SC and TC of above code is 0(1) and O(N*N) respectively






//optmisied way - 2 point approach - sliding window


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
let arr2 = [4,4,4,12,2,2,2,2,2,2,6,6]
let k2=12
console.log(LongestSubarray_2Pointer(arr2,k2))