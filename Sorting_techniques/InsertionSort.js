
function InsertionSort(arr){

  let n=arr.length;

  for(i=0;i<=n-1;i++){
    let j=i
      while(arr[j-1]>arr[j] && j>0){
        let temp = arr[j-1]
        arr[j-1]=arr[j]
        arr[j]=temp
        j--
      }
  }
  return arr
}




console.log(InsertionSort([13,46,24,52,20,9]))





//Insertion sort - revision Dec16 



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
console.log(InsertionSort2([1,2,3,4,5]))