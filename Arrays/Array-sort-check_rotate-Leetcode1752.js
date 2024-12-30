

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


let arr2 = [3,4,5,1,2,9]
console.log(ArraySortCheck_Rotate(arr2))