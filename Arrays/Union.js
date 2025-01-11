function UnionArray_Pointer(arr5,arr6){

  let i=0;
  let j=0;
  let union1=[];
  
  
  while(i<arr5.length&& j<arr6.length){
  
    if(arr5[i]<=arr6[j]){
      if(union1.length ===0 || union1[union1.length-1] !== arr5[i]){
        union1.push(arr5[i])
    }
    i++;
  }else{
    if(union1.length === 0 || union1[union1.length-1] !== arr6[j]){
      union1.push(arr6[j])
    }
    j++;
  }
  }
    while(i<arr5.length){
      if(union1[union1.length-1]!==arr5[i]){
        union1.push(arr5[i])
    }
          i++
  }
  
    while(j<arr6.length){
      if(union1[union1.length-1]!==arr6[j]){
        union1.push(arr6[j])

      }
      j++
    }
    
    return union1
  
  }
  
  
  let arr5=[1,3,5,7,9]
  let arr6=[7,9,11,15,19]
  
  console.log(UnionArray_Pointer(arr5,arr6))
  
  