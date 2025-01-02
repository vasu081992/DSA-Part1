function LeftRotate(arr){

  let n = arr.length;

  let temp = arr[0]; 

  for(i=0;i<=arr.length-1;i++){
    arr[i]=arr[i+1]
    if(i===n-1){
      arr[n-1]=temp
    }
  }
 

return arr 

}

let arr = [5,4,3,2,1]
console.log(LeftRotate(arr))



//jan2 - left rotate array by one place - revision 


