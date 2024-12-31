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


//optimised approach - using two pointers


function Remove_Duplicates_Optimised(arr2){

  let i=0;
  let count=0; 

  for(j=i+1;j<arr2.length-1;j++){
    if(arr2[i]===arr2[j]){
      count++
    }
  }

}


let arr2=[1,1,1,2,2]
console.log(Remove_Duplicates_Optimised(arr2))





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



