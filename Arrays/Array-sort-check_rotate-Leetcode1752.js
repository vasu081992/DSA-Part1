

//LEETCODE_1752

function ArraySort_Rotate(arr){  

 let n = arr.length;
 let count=0;


 for(let i=0;i<n-1;i++){

    if(arr[i]>arr[i+1]){
      count++;
    }
 }

arr[n-1]>arr[0] && count++
return count<2? true:false

}


let arr=[3,4,5,1,2]
console.log(ArraySort_Rotate(arr))