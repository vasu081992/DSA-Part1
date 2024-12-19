//normal bubble sort 
 
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

  //recursive way of bubble sort



  function BubbleRecursive(arr,n){

    if(n===1) return;
  
     let j = 0;

     let didSwap = 0;

    while(j<=n-2){

    if(arr[j]>arr[j+1]){
   
      let temp = arr[j]
      arr[j] =arr[j+1]
      arr[j+1]=temp
      didSwap=1;
     }
     j++;
    }

    if(didSwap===0)return; 
    
    BubbleRecursive(arr,n-1)

  }

  

 let arr = [6000,99,105,76,34,5,23,400,5000]
 BubbleRecursive(arr,arr.length)

 console.log('Post sorting',arr)