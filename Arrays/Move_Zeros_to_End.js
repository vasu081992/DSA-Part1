

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