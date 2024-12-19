

//using regular loops 


function InsertionSort2(arr){

  let n=arr.length;
 
   for(i=0;i<=n-1;i++){
 
     let j=i
 
   while(j>0 && arr[j]<arr[j-1]){
     let temp = arr[j];
     arr[j]=arr[j-1]
     arr[j-1]=temp;
     j-- 
   }
 
   }
 
 return arr
 
 
 }
 
 console.log(InsertionSort2([13,46,24,52,20,9]))


 //using recursion 


 
 function RecursiveInsertion(arr,i){

  let  n=arr.length;

  let j=i;
 
  if(j>n-1) return;

  while(j>0 && arr[j]<arr[j-1]){
    let temp = arr[j];
    arr[j]=arr[j-1]
    arr[j-1]=temp;
    j-- 
  }

  RecursiveInsertion(arr,i+1)

 }

 let arr=[9,8,7,6,99,63,20,58,77,1,63,3,2,1]

 RecursiveInsertion(arr,0)

 console.log('Post sort',arr)