

//LEETCODE_1752

function ArraySort_Rotate(arr){  

 let n = arr.length;
 let count=0;


 for(let i=0;i<n-1;i++){

    if(arr[i]>arr[i+1]){
      count++;
    }
 }


arr[n-1]>arr[0] && count++ //if array is already sorted 


return count<2? true:false //js shorthand to return true or false

}


let arr=[5,6,7,8,1,9]
console.log(ArraySort_Rotate(arr))





//revision






function ArraySortCheck_Rotate(arr2){

  let count=0;


  for(let i=0;i<arr2.length-2;i++){
    if(arr2[i]>arr2[i+1]){
      count++
    }
  }

  // if(arr[arr.length-1]>arr[0]){
  //   count++
  // }

  //below is shorthand of above code

  arr2[arr2.length-1]>arr2[0] && count++

  // if(count>2){
  //   return false
  // }
  // else{
  //   return true
  // }

  //below is shorthand of above code

  return count<2? true : false
}


let arr2 = [9,10,11,5,6,6]
console.log(ArraySortCheck_Rotate(arr2))





//dec31-revision - array rotate and sort check 



function Array_Rotate_Sort_Rotate(arr6){

 let n=arr6.length;
 let count=0;


 for(i=0;i<n-1;i++){

  let j=i+1;

  if(arr6[i]>arr6[j]){
    count++
  }

}

  arr[n-1]>arr[0]&& count++;

  return count<2 ? true:false

 }




let arr6=[7,8,9,5,6]

console.log(Array_Rotate_Sort_Rotate(arr6))




//jan2 - array rotate and sort check 



function Rotate_Array_sort(arr10){

  
let n = arr10.length
let count=0;

for(i=0;i<n;i++){

  if(arr10[i]>arr10[i+1]){
    count++
  }
}


arr10[n-1]>arr[0] && count++

return count<2? true : false


}

let arr10=[4,5,6,2,3,9]
console.log(Rotate_Array_sort(arr10))