

//jan3 - Brute force approach 



function MoveZeros_to_end(arr1){

  let n=arr1.length;
  let temp=[]

  for(i=0;i<n;i++){
    if(arr1[i]!==0){
      temp.push(arr1[i])
    }
  }

  for(i=0;i<n;i++){
    if(arr1[i]===0){
      temp.push(arr1[i])
    }
  }
  return temp

}

let arr1=[1,2,0,1,0,4,0]

console.log(MoveZeros_to_end(arr1))




//jan 6 revision of brute force approach 




function MoveZeros_to_end(arr2){

  let n=arr2.length; 

  let temp= []

  for(i=0;i<n;i++){
    if(arr2[i]!==0){
      temp.push(arr2[i])
    }
  }

  for(i=0;i<n;i++){
    if(arr2[i]===0){
      temp.push(arr2[i])
    }
  }
  
    for(i=0;i<n;i++){

      arr2[i]=temp[i]
    }
  
return arr2
}


let arr2 = [1,0,5,0,0,9,8,7,3,15]
console.log(MoveZeros_to_end(arr2))




//jan 6 - optimised approach - move zeros to end  



function MoveZeros_Optimised(arr3){

  let n = arr3.length;

   let j=-1; 


   //placing j in first zero th element 

   for(let i=0;i<n;i++){
    if(arr3[i]===0){
       j=i
       break
    }
   }

   //if j is still -1 which means all elems are non-zero in array,
   //in this case we return the same array

   if(j===-1){
    return arr3;
   }

   //after j , we position i as j+1, and if i is not zero we swap, else we go to next i, till i reaches end 
   //finally we return input array 
   for(let i=j+1;i<n;i++){
    if(arr3[i]!==0){  
      [arr3[i],arr3[j]]=[arr3[j],arr3[i]]
      j++
    }
   }
return arr3
}


let arr3=[1,0,2,3,0,4,1,0]
console.log(MoveZeros_Optimised(arr3))