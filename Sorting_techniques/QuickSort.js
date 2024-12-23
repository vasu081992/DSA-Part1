// function partition(arr, low, high) {
//   const pivot = arr[low]; // Choose the first element as the pivot
//   let i = low;
//   let j = high;

//   while (i < j) {
//       // Find an element greater than or equal to the pivot
//       while (arr[i] <= pivot && i <= high - 1) {
//           i++;
//       }
//       // Find an element smaller than the pivot
//       while (arr[j] > pivot && j >= low + 1) {
//           j--;
//       }
//       // Swap the out-of-place elements
//       if (i < j) {
//           [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//   }
//   // Place the pivot element in its correct position
//   [arr[low], arr[j]] = [arr[j], arr[low]];

//   return j; // Return the pivot's final position
// }

// function quickSortHelper(arr, low, high) {
//   if (low < high) {
//       // Partition the array and get the pivot index
//       const pIndex = partition(arr, low, high);

//       // Recursively sort elements before and after the partition
//       quickSortHelper(arr, low, pIndex - 1);
//       quickSortHelper(arr, pIndex + 1, high);
//   }
// }

// function quickSort(arr) {
//   quickSortHelper(arr, 0, arr.length - 1);
//   return arr;
// }

// // Test the implementation
// const arr = [4, 6, 2, 5, 7, 9, 1, 3];
// console.log("Before Quick Sort:", arr);
// quickSort(arr);
// console.log("After Quick Sort:", arr);



// function pivotArrange(arr,low,high){

//  let pivot = arr[low]
//  let i = low;
//  let j= high;

//  while(i<j){

// while(arr[i]<=pivot && i<=high){
//   i++
// }

// while(arr[j]>pivot && j>=low){
//   j--
// }

// if(i<j){
//   [arr[i],arr[j]] = [arr[j],arr[i]]
// }

//  }

// [arr[low],arr[j]] = [arr[j],arr[low]]

// return j;
  
// }



// function QuicksortAlgo(arr,low,high){

//   if(low<high){

// let pivotIndex = pivotArrange(arr,low,high)

// console.log('Pivot-index',pivotIndex)

// QuicksortAlgo(arr,low,pivotIndex-1)

// QuicksortAlgo(arr,pivotIndex+1,high)


// }

// }

// function QuickSort(arr){
//   QuicksortAlgo(arr,0,arr.length-1)
//   return arr;
// }

// let arr = [4,3,2,1,15,88,99,5,7,6]

// console.log('Array before sort',arr)


// console.log(QuickSort(arr))


// console.log('Array post sort',arr)




function PivotFind(arr,low,high){
 
  let pivot = arr[low]
  i=low;
  j=high;


  while(i<j){


     while(arr[i]<=pivot && i<=high){
      i++;
     }
     while(arr[j]>pivot && j>=low){
      j--;
     }

     //now we will have i and j from above, since they have incremented again check if i<j
     if(i<j){
      [arr[i],arr[j]] = [arr[j],arr[i]]
     }

    
  }

    [arr[low],arr[j]]=[arr[j],arr[low]]
  

  return j;

}



function QuickSortAlgo(arr,low,high){

  if(low>=high) return; 


  let pivotIndex = PivotFind(arr,low,high)

  QuickSortAlgo(arr,low,pivotIndex-1)
  QuickSortAlgo(arr,pivotIndex+1,high)


}

function Sort2(arr){

  let n = arr.length; 
  QuickSortAlgo(arr,0,n-1)

  return arr;
}


let arr = [13,12,11,10,88,65,22,17,71]

console.log(Sort2(arr))