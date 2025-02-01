

//revisit - number appearing once and other numbers twice 


//brute force way 


function Num_appearing_once(arr2){

 for(i=0;i<arr2.length;i++){
 
    let count=0;
    let num = arr2[i]

    for(j=0;j<arr2.length;j++){

       if(num===arr2[j]){
        count++
       }
    }
    if(count===1){
      return num
    }
 }

return -1

}

let arr2=[2,2,2,3,4,3,4,10,10,7]
console.log(Num_appearing_once(arr2))






//using map


function Num_appear_once(arr1){
   
  let n = arr1.length;

  //using Map

  let map1=new Map()

  for(let i = 0 ; i<arr1.length;i++){

    map1.set(arr1[i],(map1.get(arr1[i])||0)+1)

  }

for(let [key,val] of map1){
  if(val===1){
    return key
  }
}

}

let arr1=[2,2,1,1,8,9,8]
console.log(Num_appear_once(arr1))



//optimisied way - using hashing technique - revisit jan13




function Num_appearing_once_hashing(arr3){
 
  let n=arr3.length;

  let max = 0; // Initialize max to the smallest possible value


  //finding max elem of array used for creating a hash array
 if(n===1){
  return arr3[0]
 }
 else{
  for(let item of arr3){
    if(item>max){
      max=item
    }

  }


  let hash1= new Array(max+1).fill(0)


  
  for(let i=0;i<n;i++){
    hash1[arr3[i]]++
  }

  console.log(hash1)

  for(let i=0;i<arr3.length;i++){
    if(hash1[arr3[i]]===1){
      return arr3[i]
    }
  }
 }
  
}
let arr3 = [11,11,11,12,13,13]
console.log(Num_appearing_once_hashing(arr3))