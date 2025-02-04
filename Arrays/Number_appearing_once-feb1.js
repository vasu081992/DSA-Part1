
//Brute force method

function Number_appearing_once(arr1){


  for(i=0;i<arr1.length;i++){
    let count=0;
    let num=arr1[i];

    for(let j=0;j<arr1.length;j++){
  
      if(arr1[j]===num){
        count++
      }
    }
    if(count===1){
      return num
     }
  }

}
let arr1 = [2,2,2,3,3,5,6,6,6,8,8]
console.log(Number_appearing_once(arr1))

//revisit again - feb1


function Num_appearing_once(arr2){

  for(i=0;i<arr1.length;i++){
    let count=0;
    let num=arr1[i]
    for(j=0;j<arr1.length;j++){
      if(arr1[j]===num){
        count++
      }
    }
    if(count===1){
      return num
    }
  }
}


let arr2=[9,2,2,2,3,3,8,8]
console.log(Num_appearing_once(arr2))


//revisit of number appearing once- feb4 


function Number_Visiting_Once_2(arr10){

  for(i=0;i<arr10.length;i++){
    
    let count=0;
    let num=arr10[i]

    for(j=0;j<arr10.length;j++){
     
      if(num===arr10[j]){
        count++
      }

    }

    if(count===1){
      return num
    }

  }
  return -1


}

let arr10=[5,5,6,6,10,7,7,7,7,7,9,9,9]
console.log(Number_Visiting_Once_2(arr10))