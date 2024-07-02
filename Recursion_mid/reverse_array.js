

// brute force way 

function ReverseBrute (arr2){

  let arrfinal=[]; 

for(i=arr2.length-1;i>=0;i--){ // starting from end of array and pushing them to a new array

  arrfinal.push(arr2[i])
}

return arrfinal;


}
let arr2=[5,6,7,8]

console.log("brute force2",ReverseBrute(arr2))



// simple 2 pointer way 
function ReverseArray(arr1){

  let j=arr1.length-1;
  let i=0;

  while(i<j){

    let temp = arr1[i];

    arr1[i] = arr1[j]
    arr1[j]=temp;

  
    i++;
    j--;
  }


return arr1;
}


arr1=[1,2,3,4,5]
console.log(ReverseArray(arr1))




// simple 1 pointer way 
function ReverseArraySinglePointer(arr3,i,n2){

  while(i<=n2/2){ // till array reaches mid point of initial array

    let temp = arr3[i];

    arr3[i] = arr3[n2-i-1]
    arr3[n2-i-1]=temp;

  i++;
  }


return arr3;
}


arr3=[1,2,3,4,5]
let n2 =arr3.length;
console.log("Single pointer",ReverseArraySinglePointer(arr3,0,n))