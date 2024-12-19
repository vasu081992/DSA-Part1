function BubbleSort(arr){
 
  let n=arr.length; 
 
  for(i=n-1;i>=1;i--){ // we loop from n-1 to 1 
   
    let didSwap = 0; 

   for(j=0;j<=i-1;j++){  //so here we take and compare from 0 to n-1 and next time 0 to n-1, till 0 to 1
    if(arr[j]>arr[j+1]){ // comparing adjancent two and moving the greatest to right every loop
     let temp = arr[j+1];
     arr[j+1]=arr[j]
     arr[j]=temp;
     didSwap=1 //flag if input is already sorted and did not enter this loop 

    }
   }
   if(didSwap===0){
    console.log("Already a sorted array",didSwap) // if it did not enter before loop, it comes here and just breaks
    break;
   }
   else{
    console.log("Unsorted array",didSwap)
    break;
   }
  }
return arr
}

console.log(BubbleSort([1,3,4,5,9,8,27]))





//dec16 revision --> Bubble sort 



function BubbleSort2(arr){

let n = arr.length; 
let swap = 0 ;

for(i=n-1;i>=0;i--){

for(j=0;j<=i-1;j++){

 if(arr[j]>arr[j+1]){
 
  let temp = arr[j]
  arr[j] =arr[j+1]
  arr[j+1]=temp
  swap=1;
 }

}
if(swap==0){
  console.log("Input array is sorted already")
  return arr;
}
}
return arr;

}


console.log(BubbleSort2([1,2,3,4,5]))