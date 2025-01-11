//Brute force approach

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