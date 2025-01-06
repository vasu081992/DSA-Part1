//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

//Note that you must do this in-place without making a copy of the array.



//optimised two pointer approach - revision - moving zeros to end 



function MoveZeros_to_End(arr4){

  let n =arr4.length; 

  let j=-5; // some non positive number to keep track 


  for(i=0;i<n;i++){
    if(arr4[i]===0){
      j=i;
      break;
    }
  }

  if(j===-5){
    console.log('There is no zero in array')
    return arr4
  }

  if(j===0 && arr4.every((val)=> val===0)){
    console.log('All elems of array are zero')
    return arr4
  }

  for(i=j+1;i<n;i++){
 
    if(arr4[i]!==0){
      [arr4[i],arr4[j]] = [arr4[j],arr4[i]]
      j++
    }

  }

  return arr4

}

let arr4=[1,2,3,4,0,8,10,15,0,0,96]
console.log(MoveZeros_to_End(arr4))


