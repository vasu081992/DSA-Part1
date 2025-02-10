

function Longest_Subarray_withSum_K(arr1,k){

  let n = arr1.length;
  let maxcount=0;

  if(n===1 && arr1[0]===k){
    console.log('Entered a shortcut of code since length is 1')
    return 1
  }

  for(i=0;i<n;i++){

    console.log('Will not enter this loop if array lenght is 1')

    let count=1;
    let sum= arr1[i];

    for(j=i+1;j<n;j++){
   
     sum = sum + arr1[j];
      count++

    if(sum===k){
      if(count>maxcount){
        maxcount=count
    }

    }

  }

}
return maxcount
}


let arr1 = [2,3,5,5,1,9,1,5,6,1,1,1]
let arr2=[15]
let k=15
console.log(Longest_Subarray_withSum_K(arr2,k))