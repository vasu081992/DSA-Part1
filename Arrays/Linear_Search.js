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



//linear search - jan 9 - revisit 




function LinearSearch_2(arr2,num1){

  let n = arr2.length; 

  for(i=0;i<n;i++){
    if(num1===arr2[i]){
      return i
    }
  }
  return -1
}
let arr2 = [1,8,3,4,5,2]
let num1=2
console.log(LinearSearch_2(arr2,num1))