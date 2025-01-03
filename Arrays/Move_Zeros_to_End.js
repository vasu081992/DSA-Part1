

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

