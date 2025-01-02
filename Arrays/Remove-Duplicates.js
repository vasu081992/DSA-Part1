function Remove_Duplicates(arr){

    let set = new Set(arr)

    let uniqueArr = Array.from(set)


  for(i=0;i<arr.length;i++){
    arr[i]=uniqueArr[i]
  }

  return uniqueArr.length
  }


let arr = [1,1,1,2,2,3,3]

console.log(Remove_Duplicates(arr))







//revision - dec31 - using sets 



function Remove_Duplicates_Set_based(arr3){

let set = new Set(arr3)

let uniqueArray = Array.from(set)


for(i=0;i<arr3.length;i++){

  arr[i]=uniqueArray[i]

}
console.log('Unique array',arr)

return uniqueArray.length

}

let arr3=[10,9,9,9,8,8,7,7,6,6,10,5,5,5,4,4,3,3,2,2,1,1,1,1,1,1]
console.log(Remove_Duplicates_Set_based(arr3))



//optimised approach - using two pointers - dec31


function Remove_Duplicates_Optimised(arr5){
  let i = 0;
  for (let j = 1; j < arr5.length; j++) {
    if (arr5[i] !== arr5[j]) {
      i++;
      arr5[i] = arr5[j];
    }
  }
  return i + 1;

}


let arr5=[1,1,1,2,2]
console.log(Remove_Duplicates_Optimised(arr5))



//jan 2 - removing duplicates in sorted array - brute force and optimised solution 




function RemoveDuplicates_from_SortedArr(arr10){

  let n = arr10.length; 

 
  let set = new Set(arr10)

  let UniqueArray= Array.from(set)

  for(i=0;i<n;i++){
    arr10[i]=UniqueArray[i]
  }

  return arr10


}


let arr10 = [1,1,2,2,3,3,3]
console.log(RemoveDuplicates_from_SortedArr(arr10))

//SC and TC of above code is O(n) since we use add. array and TC is O(n) + O(n)


//jan 2 - removing duplicates in sorted array - optimised solution 



function duplicates_removal(arr11){

  let n = arr11.length;

  let i=0;

  for(j=i+1;j<n;j++){
    if(arr11[i]!=arr11[j]){
      i++;
      arr11[i]=arr11[j]
    }
  }
  return i+1
}


let arr11= [1,1,1,1,3,3,5,5,5,5]
console.log(duplicates_removal(arr11))