// function merge(arr, low, mid, high) {
//   const temp = []; // Temporary array
//   let left = low;  // Starting index of left half
//   let right = mid + 1; // Starting index of right half

//   // Storing elements in the temporary array in sorted order
//   while (left <= mid && right <= high) {
//       if (arr[left] <= arr[right]) {
//           temp.push(arr[left]);
//           left++;
//       } else {
//           temp.push(arr[right]);
//           right++;
//       }
//   }

//   // If elements on the left half are still left
//   while (left <= mid) {
//       temp.push(arr[left]);
//       left++;
//   }

//   // If elements on the right half are still left
//   while (right <= high) {
//       temp.push(arr[right]);
//       right++;
//   }

//   // Transferring all elements from temp to arr
//   for (let i = low; i <= high; i++) {
//       arr[i] = temp[i - low];
//   }
// }

// function mergeSort(arr, low, high) {
//   if (low >= high) return;

//   const mid = Math.floor((low + high) / 2);
//   mergeSort(arr, low, mid);    // Sort left half
//   mergeSort(arr, mid + 1, high); // Sort right half
//   merge(arr, low, mid, high); // Merge sorted halves
  
// }

// // Example Usage
// const arr = [9, 4, 7, 6, 3, 1, 5];
// console.log("Before Sorting Array:");
// console.log(arr);

// mergeSort(arr, 0, arr.length - 1);

// console.log("After Sorting Array:");
// console.log(arr);


//MergeSort dec19 - revision 


function Merge(arr,low,mid,high){

    let temp=[];
    
    let left=low;

    let right = mid+1;

while(left<=mid && right<=high){
    if(arr[left]<arr[right]){
        temp.push(arr[left])
        left++
    }
    else{
        temp.push(arr[right])
        right++
    }
}

    while(left<=mid){
        temp.push(arr[left])
        left++
    }
    
    while(right<=high){
        temp.push(arr[right])
        right++
    }


for(i=low;i<=high;i++){
    arr[i]=temp[i-low]
}


}


function MergeSort(arr,low,high){

 if(low>=high) return; 

 const mid = Math.floor((low+high)/2);

 MergeSort(arr,low,mid)

 MergeSort(arr,mid+1,high)

 Merge(arr,low,mid,high)


}

let arr = [9,8,7,6]

console.log('Before sorting array:',arr)

MergeSort(arr,0,arr.length-1)

console.log('After sorting array',arr)






//Merge sort - revision - dec21  sat



function Merge2(arr1,low,mid,high){

let temp = []

let left = low;
let right = mid+1;

while(left<=mid && right<=high){


if(arr1[left]<=arr1[right]){
 
    temp.push(arr1[left])
    left++
}


else { 

    temp.push(arr1[right])
    right++
}


}

while(left<=mid){  //pushing remaining elems on left side
    temp.push(arr1[left])
    left++
}

while(right<=high){ //pushing remaining elems on right side
    temp.push(arr1[right])
    right++
}


for(i=low;i<=high;i++){
    arr1[i]=temp[i-low]
}


}



function MergeSort2(arr1,low,high){

if(low>=high) return; // this means array is single elem array 


let mid=Math.floor((low+high)/2)

MergeSort2(arr1,low,mid) //for left side

MergeSort2(arr1,mid+1,high) // for right side split 


Merge2(arr1,low,mid,high)



}




let arr1 = [15,14,13,12]
let n=arr1.length

console.log('Array before sort',arr1)


MergeSort2(arr1,0,n-1)

console.log('Array post sort',arr1)


