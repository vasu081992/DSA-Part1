//jan13 - 2025- revisit

//missing number in an array - revisit
//brute force


function MissingNum_revisit(arr20,N5){

  let n = arr20.length; 

  for(i=1;i<=N5;i++){

    let flag=0;

    for(j=0;j<n;j++){
      if(arr20[j]===i){
        flag=1
      }
    }
  if(flag===0){
    return i
  }
  }
return -1;
}

let arr20=[1,2,3,5,6,7,8,9]
let N5=9;
console.log(MissingNum_revisit(arr20,N5))

//TC and SC of above code is O(N^2) and TC is O(1)



//Method 2 - using hashing technique 



function Missing_Num_hashing(arr1,N2){

  let n = arr1.length; 

  let hash1 =  new Array(N2+1).fill(0)

  for(let i=0;i<n;i++){
    hash1[arr1[i]]++;
  }


  for(let i=1;i<hash1.length;i++){
    if(hash1[i]===0){ 
    return i
    }
      
    }
    return -1
  }

let arr1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20]
let N2=20;
console.log(Missing_Num_hashing(arr1,N2))


//SC and TC of this code is O(N) and O(N)



//optimisied approach - summation way


function MissingNum_summation(arr2,N3){

  let n = arr2.length; 
  let sum=0;
  let sumOfFirstN=(N3*(N3+1))/2;
  let missingNum=0

  for(i=0;i<n;i++){
    sum=sum+arr2[i]
  }

  missingNum = sumOfFirstN-sum;

  return missingNum

}
let N3=10
let arr2=[1,2,3,4,6,7,8,9,10]
console.log(MissingNum_summation(arr2,N3))