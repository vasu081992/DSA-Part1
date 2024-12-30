
function Array_sorted_Brute(arr2){

  for(i=0;i<arr2.length;i++){
    for(j=0;j<arr2.length;j++){
      if(arr2[i]<arr2[j]){
     
        continue

      }
      else{
        return false
      }
    }
  }

  return true

}




let arr2= [8,9,10,18,21,25,35,98,99,15]
console.log(Array_Sorted(arr2))

//TC and SC is O(N*N) AND O(1)












//optimized -- checking if array is sorted by comparing if next num is greater than the current or current is less than next till end of loop 

function Array_Sorted(arr){

let n = arr.length;

for(i=0;i<=n-2;i++){
  
  if(arr[i]<arr[i+1]){
    continue;
  }
  else{
    return false
  }

}

return true

}

let arr = [8,9,10,18,21,25,35,98,99]
console.log(Array_Sorted(arr))


//TC and SC is O(N) AND O(1)





//dec30 - check if array is sorted - brute force 




function ArraySortBrute(arr5){

  for(i=0;i<arr5.length;i++){
    for(j=i+1;j<arr5.length;j++){
      if(arr5[j]>arr5[i]){
        continue;
      }
      else{
        return false
      }

    }
  }

  return true

}


let arr5 = [3,4,6,7,9,10,12]
console.log(ArraySortBrute(arr5))




//optimised code for array sort check 

function ArraySortCheckOptimised(arr6){    

  //let j=i+1;

  for(let i=0;i<=arr6.length-2;i++){

    if(arr6[i]<arr6[i+1]){
       continue
    }
    else{
      return false
    }
  }

  return true

}

let arr6=[16,18,22,25,100,3]
console.log(ArraySortCheckOptimised(arr6))



