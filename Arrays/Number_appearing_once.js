// brute force approach 

function Counting_num(arr2){

  let n = arr2.length;

  for(i=0;i<n;i++){

    let count = 0; 

    let num = arr2[i];

for(j=0;j<n;j++){

    if(num===arr2[j]){

      count++

    }
}
if(count===1){
  return num;
}
}
return -1
}

let arr2=[5,5,5,3,3,3,3,3,3,9]

console.log(Counting_num(arr2))




//Using map object

function Number_appearing_once(arr1){

  let n = arr1.length; 

  let map1=new Map()

  for(i=0;i<n;i++){
    map1.set(arr1[i],(map1.get(arr1[i]) || 0)+ 1)
  }


  for(let [key,val] of map1){
    if(val===1){
      return key
    }
  }

}
let arr1=[2,2,3,3,3,5]
console.log(Number_appearing_once(arr1))


//using hashing



function FrequencyNum_Hashing(arr3){

  let n = arr3.length;

    // Find the maximum element:
    let maxi = arr3[0];
    for (let i = 0; i < n; i++) {
        maxi = Math.max(maxi, arr3[i]);
    }

    console.log("Maxi",maxi)
    // Declare hash array of size maxi+1
    // And hash the given array:

    let hash = new Array(maxi + 1).fill(0);
    for (let i = 0; i < n; i++) {
        hash[arr3[i]]++;
    }

    console.log("Hash",hash)
    
    for(let i=0;i<n;i++){
      if(hash[arr3[i]]===1){
        return arr3[i]
      }
    }

}

let arr3=[8,8,8,5,3,3,9,9]
console.log(FrequencyNum_Hashing(arr3))