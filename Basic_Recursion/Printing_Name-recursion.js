


//   function printNames(i,n) {

//     if(i>n) return; // base condition to end the recursion 

//   console.log("Vasu devan");

//    printNames(i+1,n)


//   }

// printNames(1,5)



function PrintNamesFunction (i,n){

  if(i>n) return; 

  console.log('Manvith')

  PrintNamesFunction(i+1,n)
}

PrintNamesFunction(1,5)