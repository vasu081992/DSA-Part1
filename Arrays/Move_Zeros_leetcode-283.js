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





//jan 9 - 2025 - move zeros to end - brute force



function MoveZerostoEnd(arr11){

  let n = arr11.length; 

  let temp=[];

  for(i=0;i<n;i++){
    if(arr11[i]!==0){
      temp.push(arr11[i])
    }
  }

    
  for(i=0;i<n;i++){
    if(arr11[i]===0){
      temp.push(arr11[i])
    }
  }

  for(i=0;i<n;i++){
    temp[i]=arr11[i]
  }

  return arr11

}


let arr11 = [1,0,5,6,0,0,3,2,0,1,0]

console.log(MoveZeros_to_End(arr11))

//here SC and TC are O(n)


//move zeros to end - optimised 



function Move_Zeros_optimisied(arr12){

  let n = arr12.length; 
  let j=-10;

   //moving to first zero in array 

   for(i=0;i<n;i++){
    if(arr12[i]===0){
       j=i;
       break;
    }
   }

   if(j===0 && arr12.every((val1)=>val1===0)){
    console.log('All elems of array are zero')
    return arr12
   }

   if(j===-10){
    console.log('No zeros in given array')
    return arr12
   }

   for(i=j+1;i<n;i++){
    if(arr12[i]!==0){
      let temp=arr12[i]
      arr12[i]=arr12[j]
      arr12[j]=temp
      j++;
    }
   }

   return arr12;
}

let arr12 = [1,2,3,4]
console.log(Move_Zeros_optimisied(arr12))