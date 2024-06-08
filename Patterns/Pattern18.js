

function pattern18(N) {
  // Outer loop for the number of rows.
  for (let i = 0; i < N; i++) {
      let res = '';


     //stars printing
 
      for (let j =0;j<N-i; j++) {
        res+='*'
}

  //space printing
            for (let j =0;j<2*i; j++) {
              res+=' ';
     }

     //stars printing
 
     for (let j =0;j<N-i; j++) {
      res+='*'
}
console.log(res);

  
      // Print the row and move to the next line.
  }

  for (let i = 1; i <=N; i++) {
    let res = '';
   //stars printing

    for (let j =1;j<=i; j++) {
      res+='*'
}

  //space printing
  for (let j =0;j<=N-(2*i)+2; j++) {
    res+=' ';
}
   //stars printing

for (let j =1;j<=i; j++) {
  res+='*';
}

console.log(res);

}
}
pattern18(3);



  



