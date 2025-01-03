  function Array_right_Rotate(arr,k){

    const n = arr.length;
    k = k % n;
    const rotated = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = arr[i];
    }

    for (let i = 0; i < n; i++) {
      arr[i] = rotated[i];
    } 

    return arr
  }

  let arr = [1,2,3,4]
  let k=5

  console.log(Array_right_Rotate(arr,k))



  //jan 3  - left rotate by k times - leetcode 189 revision




  function Array_Rotate_Right(arr2,k1){

    let n = arr2.length; 

     k1 = k1%n; // we do this to reduce higher k values based on length of array , so that only effective rotations are done 
                 //FYI. if an array is rotated n times it gets the same array. ie if length is 4 and if we rotate 4 times, we get same position of array. so we do %n to get the remainder which is sufficient enough. 

     if(k1===0){
 
      console.log('Function ends here as number of rotation and n is same')
      return arr2;

     }
     else{


      console.log('Function enters main code  and rotates the array since n and k are different')


     let newArray = new Array(n).fill(0)

     for(i=0;i<n;i++){
  
       newArray[(i+k1)%n] = arr2[i]

     }

     for(i=0;i<n;i++){
      arr2[i]=newArray[i]
     }

     return arr2
    }
  }

  let arr2=[9,8,5,6,3,4,12,15,7]
  let k1=7
  console.log(Array_Rotate_Right(arr2,k1))