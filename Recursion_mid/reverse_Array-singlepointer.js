
//recursive way two pointer 
function ReverseArrayRecursion(arr1,i,j){

  if(i===j){
    return arr1;
  }
 
    let temp = arr1[i];
    arr1[i] = arr1[j]
    arr1[j]=temp;
    
   return ReverseArrayRecursion(arr1,i+1,j-1)

}

 arr1=[6,7,8,9,10]
let n2=arr1.length;
console.log(ReverseArrayRecursion(arr1,0,n2-1))




//recursive way single pointer 
function ReverseArraySinglePointer(arr1,i,n){

 if(i>=n/2){ // if array crossed mid of it. we just return the last available reversed array
  return arr1;
 }
    let temp = arr1[i];
    arr1[i] = arr1[n-i-1] // i = n-i-1 (swapping position for every i )
    arr1[n-i-1]=temp;
    
   return ReverseArraySinglePointer(arr1,i+1,n) // changing only i value as it is single point recursive way

}

 arr1=[1,2,3,4]
let n=arr1.length;
console.log(ReverseArraySinglePointer(arr1,0,n))

