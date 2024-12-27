
//brute force - to sort and find the second largest and second smallest 



function SecondLarge_SecondSmall(arr1){

  let n=arr1.length;

  let sorted = arr1.sort((a,b)=>a-b)

  console.log("Second largest",sorted[n-2])

  console.log("Second smallest",sorted[1])

}

let arr1 = [4,9,2,3,10,15,18,50,25]
SecondLarge_SecondSmall(arr1)

//TC is O(nlogn) and SC is O(1)



//BETTER APPROACH


function SecondLarge_Better(arr2){

  let n=arr2.length;
  
  if(n===1 || n===0){
    console.log("Second largest",-1)

    console.log("Second smallest",-1)
  }
  
  else{
  let smallest = Infinity;
  let secondSmallest = Infinity;

  let largest = -Infinity
  let secondlargest = -Infinity


for(i=0;i<arr2.length;i++){

  if(arr2[i]<smallest){
    smallest=arr2[i]
  }
  if(arr2[i]>largest){
    largest=arr2[i]
  }
}

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] < secondSmallest && arr2[i] !== smallest)
    secondSmallest = arr2[i];
  if (arr2[i] > secondlargest && arr2[i] !== largest)
    secondlargest = arr2[i];
}

console.log("Second largest",secondlargest)

console.log("Second smallest",secondSmallest)
}
}

let arr2=[5,10,88,9,3,25]
SecondLarge_Better(arr2)




//dec27 - revisit 

//second largest and smallest using brute force - ie by sorting (not recommended)



function SecondLargest_and_Smallest(arr3){

  let n = arr3.length

let sortedArray2=arr3.sort((a,b)=>a-b)

console.log('Second largest',sortedArray2[n-2])
console.log('Second smallest',sortedArray2[1])


}


let arr3 = [15,14,2,3,6,8,9,7,99,10]

SecondLargest_and_Smallest(arr3)



//optimised - second largest and smallest - dec27 



function SecondLargest_and_smallest_Optimised(arr4){

  let n = arr4.length; 

  let smallest = Infinity;
  let largest= -Infinity; 
  let secondlargest=-Infinity;
  let secondsmallest = Infinity;


  for(i=0;i<n;i++){
    if(arr4[i]>largest){
      largest=arr4[i]
    }
  if(arr4[i]<smallest){
    smallest=arr4[i]
  }
}

for(i=0;i<n;i++){
  if(arr4[i]>secondlargest && arr4[i]!==largest){
    secondlargest=arr4[i]
  }

  if(arr4[i]<secondsmallest && arr4[i]!==smallest){
    secondsmallest=arr4[i]
  }
}

  console.log('Smallest',smallest)

  console.log('Largest',largest)

  
  console.log('Second Smallest',secondsmallest)

  console.log(' Second Largest',secondlargest)


}


let arr4=[2,3,1,9,10,5,55,70,5,0.2,99]
SecondLargest_and_smallest_Optimised(arr4)