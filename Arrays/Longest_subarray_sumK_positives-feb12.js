
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