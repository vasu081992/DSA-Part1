

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



//largest elem- optimisied approach  - revision-dec27



function LargestElem2(arr3){

let n  = arr3.length 

let max = arr3[0]

for(i=0;i<arr3.length;i++)
{
  if(arr3[i]>max){
    max=arr3[i]
  }
}
return max
}


let arr3=[10,12,128,18,18,21,25,36,96,33,74]

console.log(LargestElem2(arr3))


//above code has SC of O(1) and TC of O(n)


//non-optimised for largest elem - dec27



function LargestElemBySorting(arr4){

let n = arr4.length

let sortedArray = arr4.sort((a,b)=>a-b)

console.log('Max elem',sortedArray[n-1])


}


let arr4= [99,10,140,5,6,7,8,90,12,17]
LargestElemBySorting(arr4)

