// function Fibonacci(n){

//   if (n <= 0) return "";  // If n is 0 or negative, return an empty string.
//   if (n === 1) return "0"

//   let arr= [];

//   arr[0]=0
//   arr[1]=1

//   for(let i=2;i<n;i++){
//     arr[i]=arr[i-1]+arr[i-2]
//   }

//   //let strop = (arr.join(' '))


// for(i=0;i<arr.length;i++){
//   console.log(arr[i]+" ")
// }
  

// }

// (Fibonacci(5))


// //fibonacci optimised solution 


// function FibonacciOptimised(n){

//   if (n <= 0) return "";  // If n is 0 or negative, return an empty string.
//   if (n === 1) return 0

// let last = 1;

// let secondlast = 0;

// console.log(secondlast+" "+last )


// let cur;


// for(i=2;i<n;i++){
 

//     cur = last+secondlast;
//     secondlast=last;
//     last = cur

//     console.log(cur)

   
// }

// }

// FibonacciOptimised(9)



// practice on Dec2 2024 

//Brute force 

function Fibonacci(N){

let arr = []; 

arr[0] = 0;
arr[1]=1;

for(i=2;i<=N;i++){
  arr[i]=arr[i-1]+arr[i-2];
}

for(i=0;i<arr.length;i++)
{
  console.log(arr[i])
} 


}

Fibonacci(5)  // SC is O(n) and TC is O(n+n)--> O(2n)--> O(n)


//optimised apporach 


function FibonacciOptimised(N){


    let temp;

    let last = 1

    let secondlast = 0

    console.log(secondlast+" "+last)


    for(i=2;i<N;i++){

    temp = last+secondlast;

    secondlast=last;
    last=temp;


    console.log(temp)
}



  

}
  
  FibonacciOptimised(6)