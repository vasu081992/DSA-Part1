
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


