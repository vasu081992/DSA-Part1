
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