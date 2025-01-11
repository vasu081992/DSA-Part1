


//using set 


function Union_Array(arr1,arr2){

  let set1 = new Set()
  let temp=[]

  for(let i=0;i<arr1.length;i++){
    set1.add(arr1[i])
  }

  for(let j=0;j<arr2.length;j++){
    set1.add(arr2[j])
  }


 //set is an object so inorder to make it to an array , we will use a loop over set and return array


 for(let item of set1){
  temp.push(item)
 }

 return temp

}
let arr1 = [3,8,7,9,6]

let arr2 = [3,8,15,16]

console.log(Union_Array(arr1,arr2)) // this code will have TC of O(m+n) and SC of O(m+n)




//approach 2 -- using map 



function Union_Set_MapApproach(arr3,arr4){

  let map1 = new Map()

  let temp  = []

  for(i=0;i<arr3.length;i++){
    map1.set(arr3[i],map1.get(arr3[i]) || 0  + 1)
  }

  for(i=0;i<arr4.length;i++){
    map1.set(arr4[i],map1.get(arr4[i]) || 0 + 1)
  }

  

  for(let [key,val] of map1){
    temp.push(key)
  }
return temp

}

let arr3 = [7,8,9,10]

let arr4 = [7,13,15,8]

console.log(Union_Set_MapApproach(arr3,arr4))