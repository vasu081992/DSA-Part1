
function Frequency_count(arr){

  let n = arr.length;

  let map1=new Map()

  for(i=0;i<n;i++){

    let count = map1.get(arr[i]) || 0; 

    map1.set(arr[i],count+1)

  }

let maxFrequency = Math.max(...map1.values())

  const maxFreqElements = [...map1.keys()].filter(num => map1.get(num) === maxFrequency);

  console.log(maxFreqElements)

  let totalFreq = maxFrequency*maxFreqElements.length;

  console.log(totalFreq)

}


(Frequency_count([1,2,2,3,1,4]))