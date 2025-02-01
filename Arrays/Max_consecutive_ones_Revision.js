function Max_consecutive_ones(arr1){

  let count = 0 ; 
  let maxCount = 0;


  for(i=0;i<arr1.length;i++){
    if(arr1[i]===1){
      count++;
      if(count>maxCount){
        maxCount=count;
      }
    }
    else{
      count=0;
    }

    }
    return maxCount
  }


let arr1=[1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1]
console.log(Max_consecutive_ones(arr1))