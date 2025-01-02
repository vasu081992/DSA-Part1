  function Array_right_Rotate(arr,k){

    let n =arr.length;
    let temp;

    while(k>0){
    
      temp = arr[n-1]

      for(i=n-1;i>0;i--){

        arr[i] = arr[i - 1];

      }
      arr[0]=temp
      k--;
    
    }
    return arr

  }

  let arr = [1,2,3,4]
  let k=2

  console.log(Array_right_Rotate(arr,k))