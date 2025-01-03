
function Rotate_Array(arr,k,rotate){

  let n = arr.length; 
  
  k = k%n; 

  if(rotate==="right"){

    let newArray1 = new Array(n).fill(0)

    for(let i=0;i<n;i++){

      newArray1[(i+k)%n] = arr[i]

    }

    for(i=0;i<n;i++){
      arr[i] = newArray1[i]
    }
    return arr
  }

  else{

    let newArray1 = new Array(n).fill(0)

    for(let i=0;i<n;i++){

      newArray1[(i+n-k)%n] = arr[i]

    }

    for(i=0;i<n;i++){
      arr[i] = newArray1[i]
    }

    return arr

  }

}


let arr = [3,7,8,9,10,11]

console.log(Rotate_Array(arr,4,'left'))



//Approach 2- Reversal algorithm 


function Reverse(arr2,start,end){
  while (start <= end) {
    let temp = arr2[start];
    arr2[start] = arr2[end];
    arr2[end] = temp;
    start++;
    end--;
}
}


function Reversal_Algorithm (arr2,k){

  let n =arr2.length; 

  // Reverse first n-k elements
  Reverse(arr2, 0, n - k - 1);
  // Reverse last k elements
  Reverse(arr2, n - k, n - 1);
  // Reverse whole array
  Reverse(arr2, 0, n - 1);

  return arr2
}



let arr2 = [1,2,3,4,5,6,7]
let k=2
console.log(Reversal_Algorithm(arr2,k))




// second attempt of approach 2 - recusrive reversal 



function Reverse(arr5,start,end){

  while(start<=end){
    let temp=arr5[start]
    arr5[start]=arr5[end]
    arr5[end]=temp
    start++
    end--
  }

}


function RotatetoRight(arr5,n,k1){

Reverse(arr5,0,n-k1-1)

Reverse(arr5,n-k1,n-1)

Reverse(arr5,0,n-1)

return arr5

}

let arr5 = [9,8,7,6,5,12,15,18,21,5,3]
let n=arr5.length
let k1=3; 


console.log(RotatetoRight(arr5,n,k1))



