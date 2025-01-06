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



function Left_Rotate_Array(arr10){

let n = arr10.length; 
let temp = arr10[0]

for(i=1;i<n;i++){
 
  arr10[i-1] = arr10[i]

}

arr10[n-1] = temp

return arr10
}


let arr10 = [4,5,6,3,1]
console.log(Left_Rotate_Array(arr10))

//SC AND TC OF above code is O(1) and O(N) respectively


