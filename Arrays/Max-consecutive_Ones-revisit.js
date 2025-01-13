

//revisit on jan13 - 1pm 


function Max_Consecutive_Ones(arr1){
 
  let n = arr1.length;
  let maxcount=0
  let count=0;

  for(i=0;i<n;i++){

    if(arr1[i]===1){
      count++
    }
    if(arr1[i]!==1){
      if(count>maxcount){
        maxcount=count;
      }
      count=0;
    }
    if(count>maxcount){
      maxcount=count
    }
  }
  return maxcount;

}

let arr1 = [0,1,1,1,0,1,0,0,0]
console.log(Max_Consecutive_Ones(arr1))