

function Longest_Subarray_withSum_K(arr1,k){

  let n = arr1.length;
  let maxcount=0;

  if(n===1 && arr1[0]===k){
    console.log('Entered a shortcut of code since length is 1')
    return 1
  }

  for(i=0;i<n;i++){

    console.log('Will not enter this loop if array lenght is 1')

    let count=1;
    let sum= arr1[i];

    for(j=i+1;j<n;j++){
   
     sum = sum + arr1[j];
      count++

    if(sum===k){
      if(count>maxcount){
        maxcount=count
    }
    }
  }
}
return maxcount
}


let arr1 = [2,3,5,5,1,9,1,5,6,1,1,1]
let arr2=[15]
let k=15
console.log(Longest_Subarray_withSum_K(arr1,k))


//feb10 - 2 pointer approach 



function LongestSubarray_2pointer(arr3,k1){
  
  let n =arr3.length;

   let left=0; 
   let right=0;
   let sum = arr3[0]
   let maxLen=0;
   let newVar

  while(right<n){
// if sum > k, reduce the subarray from left
        // until sum becomes less or equal to k

    while(left<=right && sum>k1){
      sum = sum-arr3[left]
      left++
    }


   // if sum = k, update the maxLen i.e. answer

    if(sum===k1){
      maxLen = Math.max(maxLen, right - left + 1);
    }

    // Move forward the right pointer

    right++

    if(right<n){
      sum=sum+arr3[right]
    }
  }
    return maxLen
  }



let arr3 = [2,2,1,1,1,1,1]
let k1=5
console.log(LongestSubarray_2pointer(arr3,k1))



//longest sub array - 2 pointer - revisit  



function Longest_Subarray_sumK(arr10,k2){

  let left=0;
  let right = 0;
  let maxlength = 0; 
 let sum=arr10[0]
 let n=arr10.length

  while(right<n){
 
    while(left<=right && sum>k){
      sum=sum-arr10[left]
      left++
    }

    if(sum===k2){
      maxlength = Math.max(maxlength,right-left+1)
    }

  right++;

  if(right<n){
    sum=sum+arr10[right]
  }
  }

  return maxlength
}
let arr10 = [1,4,2,3,5,5,10]
let k2=10;
console.log(Longest_Subarray_sumK(arr10,k2))