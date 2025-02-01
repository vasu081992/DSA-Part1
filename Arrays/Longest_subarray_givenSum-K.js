

  function Longest_Subarray(arr1,k){

    let n = arr1.length;
    let maxcount=0;

    for(i=0;i<n;i++){
      let count=0
      let sum=0

      for(j=i;j<n;j++){

        sum=sum+arr1[j]
        count++;

        if(sum===k){
          {
            if(count>maxcount)
            maxcount=count;
          }
        }

      }
    }
    return maxcount
  }

  let arr1=[2,3,7,1,1,1,1,1,1,1]
  let k=7
  console.log(Longest_Subarray(arr1,k))



  //2 pointers approach 


