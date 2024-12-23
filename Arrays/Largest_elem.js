

// brute force method 


function LargestBrute(arr2){

  
  let sorted=arr2.sort((a,b)=>a-b)

  return sorted[sorted.length-1]


}


let arr2= [4,5,6,7,8,10,55,3,14]
console.log(LargestBrute(arr2))



//optimised 


function LargestEleminArray(arr){
 
  let n = arr.length
  let max = arr[0]

  for(let i=1;i<=n-1;i++){
    
    if(arr[i]>max){
      max=arr[i]
    }

  }
  return max

}

let arr = [19,27,90,3,37,88,66,39,88,1000]

console.log(LargestEleminArray(arr))


//Recursive approach  - sc and tc same as above so we can avoid below method but good to know



function largestElemRecusrive(arr,i,max){


  let n=arr.length-1;


  if(i>n) return max;
 
    if(arr[i]>max){
      max=arr[i]
    }

  return largestElemRecusrive(arr,i+1,max)

}

let arr1=[75,38,96,44,32,15,74,69,90,70]
console.log(largestElemRecusrive(arr1,0,arr[0]))





