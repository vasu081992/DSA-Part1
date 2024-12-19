// // Given an array of integers: [1, 2, 1, 3, 2] and we are given some queries: [1, 3, 4, 2, 10]. For each query, we need to find out how many times the number appears in the array. For example, if the query is 1 our answer would be 2, and if the query is 4 the answer will be 0. 



// function countOccurrences (arr){

//   let n=arr.length
//   let visited= new Array(n).fill(false)

//   for(i=0;i<n;i++){
//    if(!visited[i]){
//      let count=1;
//     visited[i]=true;
  
//    //to track frequencies
//     for(j=i+1;j<n;j++){
//       if(arr[i]===arr[j] && !visited[j]){
//         visited[j]=true
//         count++;
//       }
//     }
//     console.log(arr[i],count)
//   }
// }
//   }


// countOccurrences([1,3,3,2,2,10])


//   //using Map in javascript 


//   function countOccurrencesMap(arr2){

//   let map1= new Map()

//   for(let i=0;i<arr2.length;i++){

//     let count = map1.get(arr2[i]) || 0; 

//      map1.set(arr2[i],count+1)
//   }

//   map1.forEach((count, elem)=>{
//     console.log(elem,count)
//   })


//   }

//   countOccurrencesMap([1,3,3,2,2,10])




// function CountFrequencies(arr){

// let n=arr.length
// let visited= new Array(n).fill(0)


// for(i=0;i<arr.length;i++){
// if(!visited[i]){
//   visited[i]=1;
//   let count=1;

//    for(j=i+1;j<n;j++){
//     if(arr[i]===arr[j]&& !visited[j]){
//       visited[j]=1;
//       count++
//     }
//    }
//    console.log(arr[i],count)

// }
// }
// }

// CountFrequencies([3,5,6,3,5,5,6])



// function CountFreq(arr){

//   let map = new Map()

//   for(i=0;i<arr.length;i++){

//     let count=map.get(arr[i])||0 /// assign 0 if count does not exists else retrive the existing count
//     map.set(arr[i],count+1) // increment count from 0 or from previous count value
    

//   }

//   map.forEach((count,elem)=>{

//     console.log(elem, count)

//   })
// }


// CountFreq([3,5,6,3,5,5,6])

//dec12 --> Brute force approach

function CountFreq(arr){

  let arr2=Array(arr.length).fill(false)
 
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
      console.log(arr[i],count)
    }

  }
}


CountFreq([10,5,10,15,10,5])


//optimisied approach using Map 


function ArrayFreqUsingMap(arr){

  let map1 = new Map()

  for(i=0;i<arr.length;i++){

    let count=map1.get(arr[i])||0;

    map1.set(arr[i],count+1)

}

map1.forEach((value, key) => {
  console.log(key, value);
});

}


(ArrayFreqUsingMap([10,5,10,15,10,5]))
