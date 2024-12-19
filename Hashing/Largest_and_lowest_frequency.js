
// function Frequency_count(arr){

//   let n = arr.length;

//   let map1=new Map()

//   for(i=0;i<n;i++){

//     let count = map1.get(arr[i]) || 0; 

//     map1.set(arr[i],count+1)

//   }

//   let highest = 0;
//   let lowest = 1;
//   let highestkey=null
//   let lowestKey=null

// map1.forEach((count,elem)=>{

//   if(count>highest){
//      highest = count; 
//      highestkey=elem
//   }
//   if(count<=lowest){
//     lowest=count;
//     lowestKey=elem
//   }

// })
// console.log(highestkey,lowestKey)
// }

// (Frequency_count([1,1,2,2,2,3,4]))



//brute force - dec12

function CountFreq(arr){

  let arr2=Array(arr.length).fill(false)
  let highest=0; 
  let lowest=Infinity
  let highestElem=null;
  let lowestElem=null;

  for(i=0;i<arr.length;i++){

    if(!arr2[i]){
      let count=0; 
      count=count+1;
      arr2[i]=true;
  
  for(j=i+1;j<arr.length;j++){

      if(!arr2[j] && arr[i]===arr[j]){
        count++
        arr2[j]=true;
      }
      }

      //console.log(arr[i],count)

      if(count>highest){
        
        highest = count;
        highestElem=arr[i]
        
      }

      
      if(count<lowest){
        
        lowest = count;
        lowestElem=arr[i]

      }

    }

  }

console.log(highestElem,lowestElem)

}


(CountFreq([2,2,3,4,4,2]))


//optimised using Map



function highandLowUsing_Map(arr){


  let map1 = new Map()

  for(i=0;i<arr.length;i++){

    let count=map1.get(arr[i])||0;

    map1.set(arr[i],count+1)

  }

  let lowest = Infinity;
  let highest=0;
  let highestElem = null;
  let lowestElem = null;


  map1.forEach((value,key)=>{

    if(value<lowest){
      lowest=value
      lowestElem = key
    }
    if(value>highest){
      highest=value
      highestElem = key
    }

  })  

return highestElem



// map1.forEach((value, key) => {
//   console.log(key, value);
// });


}

console.log(highandLowUsing_Map([2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,2]))



function BruteReviseFreq(arr){

  
  let arr2=Array(arr.length).fill(false)

  let lowest=Infinity;
  let highest=0;
  let lowestElem=null;
  let highestElem=null;

  for(i=0;i<arr.length;i++){

    if(!arr2[i]){
      let count=0; 
      count=count+1;
      arr2[i]=true

    for(j=i+1;j<arr.length;j++){
      if(!arr2[j] && arr[i]===arr[j]){
        count=count+1;
        arr2[j]=true
      }

    }
    if(count<lowest){
      lowest=count;
      lowestElem=arr[i]
    }
    if(count>highest){
      highest=count;
      highestElem=arr[i]
    }

  }

}
console.log(lowestElem,highestElem)

}
(BruteReviseFreq([2,2,4,4,4,4,1,2]))