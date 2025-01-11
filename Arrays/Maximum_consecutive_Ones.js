function Max_Consecutive_Ones(arr1){

  let count1=0;
  let temp=0;

  for(let i=0;i<arr1.length;i++){
    if(arr1[i]===1){
      count1++;
    }
    else if(arr1[i]!==1){
      if(count1>temp){
      temp=count1;
    }
    count1=0;
  }
  }
  if(count1>temp){
    return count1
  }
  return temp;
}
let arr1 = [0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1]

console.log(Max_Consecutive_Ones(arr1))
