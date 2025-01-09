function LinearSearch(arr1,num){

  let n = arr1.length; 

  for(i=0;i<n;i++){
  if(arr1[i]===num){
    return i;
  } 
} 
return -1

}

let arr1 = [1,2,3,4,5]
let num = 3

console.log(LinearSearch(arr1,num))