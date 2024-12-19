

function SelectionSort(arr){

  let n=arr.length; 


for(let i=0;i<n;i++){

  let min = arr[i]
  let indextrack = i;

  for(j=i+1;j<n;j++){

    if(arr[j]<min){

      min=arr[j];
     
      indextrack=j;

    }

  }
 

  let temp=arr[i] //it1 --> temp=5
  arr[i]=arr[indextrack]//arr[1]-->
  arr[indextrack]=temp//arr[3]-->7

}
return arr
}


console.log(SelectionSort([7,5,9,2,8]))


//dec14 revision - more simpler




function SelectionSortRevisit(arr){

  let n=arr.length; 

  for(i=0;i<n-2;i++){ // coz we loop only till last second element to swap last second (n-2) and last (n-1)
    
    let mini = i; // we assume the first index as least in every loop

    for(j=i;j<n-1;j++){ // we loop from that ith element to last element (n-1) to find the least and swap it as shown below
     if(arr[j]<arr[mini]){
      let temp=arr[mini];
      arr[i]=arr[j];
      arr[j]=temp;
     }
    }

  }
  return arr;

}



console.log(SelectionSortRevisit([14,28,39,5,78,1,69]))



//dec16 revision last --> selection sort



function SelectionSort2(arr){

  let n = arr.length; 


  for(i=0;i<=n-1;i++){
    
    let min = arr[i];
    let minIndex =i;

    for(j=i+1;j<=n-1;j++){
    
      if(arr[j]<min){
         minIndex=j;
        let temp = arr[i];
        arr[i]=arr[j]
        arr[j]=temp;
      }

      }

    }
    
      return arr;
    }



console.log(SelectionSort2([13,46,52,24,20,9]))
