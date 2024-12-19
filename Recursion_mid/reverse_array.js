

// // brute force way 

// function ReverseBrute (arr2){

//   let arrfinal=[]; 

// for(i=arr2.length-1;i>=0;i--){ // starting from end of array and pushing them to a new array

//   arrfinal.push(arr2[i])
// }

// return arrfinal;


// }
// let arr2=[5,6,7,8]

// console.log("brute force2",ReverseBrute(arr2))



// // simple 2 pointer way 
// function ReverseArray(arr1){

//   let j=arr1.length-1;
//   let i=0;

//   while(i<j){

//     let temp = arr1[i];

//     arr1[i] = arr1[j]
//     arr1[j]=temp;

  
//     i++;
//     j--;
//   }


// return arr1;
// }


// arr1=[1,2,3,4,5]
// console.log(ReverseArray(arr1))




// // simple 1 pointer way 
// function ReverseArraySinglePointer(arr3,i,n2){

//   while(i<=n2/2){ // till array reaches mid point of initial array

//     let temp = arr3[i];

//     arr3[i] = arr3[n2-i-1]
//     arr3[n2-i-1]=temp;

//   i++;
//   }


// return arr3;
// }


// arr3=[1,2,3,4,5]
// let n2 =arr3.length;
// console.log("Single pointer",ReverseArraySinglePointer(arr3,0,n))


// //method1 

// function ReverseArray(arr){

//   let arr2=[]

//   for(i=arr.length-1;i>=0;i--){
 
//    arr2.push(arr[i])

// }
// return arr2

// }
 
// let arr=[10,20,30,40,50,100,10000,-4,8,9,7,6,5]

// console.log(ReverseArray(arr))

// //method2 


// function reverseArray2(arr) {
//   // your code here
//   let arrTemp = []
//   let n =arr.length;
  
//   for(let i=0;i<=arr.length-1;i++){
//       arrTemp[i] = arr[n-i-1]
//   }
//   return arrTemp;
// }

// console.log(reverseArray2([10,50,80,90]))


// //method3 - 2 pointer way 


// function ReverseArray2Pointer(arr){

// let swap; 

// let i=0;

// let j=arr.length-1

// for(i=0;i<arr.length/2;i++){
//   swap=arr[i]
//   arr[i]=arr[j]
//   arr[j]=swap;
//   j--;
// }
// return arr;
// }



// console.log(ReverseArray2Pointer([20,50,90,80,70]))


//1 pointer approach 


// function ReverseArraySinglePointer(arr){

//   let swap; 

//   let i=0;
//  let n= arr.length;  
//   for(i=0;i<=Math.floor((arr.length-1))/2;i++){

//     swap = arr[i]
//     arr[i]=arr[n-i-1]
//     arr[n-i-1]=swap;

//   }
//   return arr;
//   }
  
  
  
//   console.log(ReverseArraySinglePointer([1,2,3,4,5,6,7,8,9]))
  
  

//dec 2 2024

//method 1 - brute force 


function ReverseArray(arr){

  let arrrev=[];

  for(i=arr.length-1;i>=0;i--){

    arrrev.push(arr[i])

  }
  return arrrev;


}

console.log(ReverseArray([5,4,3,2,1]))


//2 pointer



function Revarray2Pointer(arr){

  let i=0;
  let n=arr.length;
  let j=n-i-1

  for(i=0;i<Math.floor(arr.length-1)/2;i++){
    let temp;

    temp=arr[i];
    arr[i]=arr[j]
    arr[j]=temp;
    j--;
  }
  return arr;
}

console.log(Revarray2Pointer([10,9,8,7,6,5]))


//1 pointer

function Revarray1Pointer(arr){

  let i=0;
  let n=arr.length;

  for(i=0;i<Math.floor(arr.length-1)/2;i++){
    let temp;

    temp=arr[i];
    arr[i]=arr[n-i-1]
    arr[n-i-1]=temp;
  }
  return arr;
}

console.log(Revarray1Pointer([3,2,8,9,10]))