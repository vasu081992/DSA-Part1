function Array_Union(arr1,arr2){

  let map1 = new Map()
  let union = []

for(let num of arr1){
  map1.set(num,(map1.get(num) || 0) + 1 )
}

for(let num of arr2){
  map1.set(num,(map1.get(num) || 0) + 1 )
}


for(let [num,count] of map1)
{
  union.push(num)
}

return union

}


let arr1=[1,2,3,4,5,11,12]
let arr2 = [2,3,4,4,5,6]
console.log(Array_Union(arr1,arr2))



//optimised approach - own try


function ArrayUnion_Opti(arr3,arr4){

  for (let num of arr4) {
    // Check if the element is not already in arr1
    if (!arr3.includes(num)) {
      // If not, add it to arr1
      arr3.push(num);
    }
  }
  
return arr3
}


let arr3=[1,2,3,4,5,55]
let arr4 = [2,3,4,4,5,20]

console.log(ArrayUnion_Opti(arr3,arr4))

//TC of above code is O(m*n)
//SC is O(1)



//Optimised using set


function Union_using_Set(arr5,arr6){
  
  let set1 = new Set() 

  let union = []


  for(let num of arr5){
    set1.add(num)
  }

  for(let num of arr6){
    set1.add(num)
  }

  for(let num of set1){
    union.push(num)
  } 

  return union

}

let arr5=[1,2,3,4,5]
let arr6 = [2,3,4,4,6]
console.log(Union_using_Set(arr5,arr6))



function Union_2_pointers(arr7,arr8){

  let i=0;
  let j=0;
  let union = []

while(i<arr7.length && j<arr8.length){


  if(arr7[i]<=arr8[j]){
    if (union.length === 0 || union[union.length - 1] !== arr7[i])
      union.push(arr7[i]);
    i++;
  } else{
    if (union.length === 0 || union[union.length - 1] !== arr8[j])
      union.push(arr8[j]);
    j++;
  }
  } 
  while(i<arr7.length){
    if(union[union.length-1]!==arr7.length){
    union.push(arr7[i])
    i++
  }
}
 
  while(j<arr8.length){
    if(union[union.length-1]!==arr8.length){
    union.push(arr8[j])
    j++
  }


}

return union


}


let arr7=[1,4,7,9,11]

let arr8 = [1,4,13,15]

console.log(Union_2_pointers(arr7,arr8))