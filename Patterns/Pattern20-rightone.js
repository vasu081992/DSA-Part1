

function pattern20(N) {

  for(i=1;i<=(2*N)-1;i++){
 
    let res = '';

    if(i>N){
      //stars printing 
      for(j=i;j<=(2*N)-1;j++){

        res=res+'*'
      }

      
      //space printing 

      for(j=1;j<=2*(i-N);j++){

        res=res+' ';
      }

   //stars printing 
   for(j=i;j<=(2*N)-1;j++){

    res=res+'*'
  }
} else {
        //stars printing 
      for(j=1;j<=i;j++){

        res=res+'*'
      }

      //space printing 

      for(j=1;j<=2*(N-i);j++){

        res=res+' ';
      }



      //stars printing 
      for(j=1;j<=i;j++){

        res=res+'*'
      }
    }

    console.log(res)


      }
    




  }

pattern20(6);



  












































































// for (let i = 1; i <=N; i++) {
//   let res = '';
//  //stars printing

//   for (let j =1;j<=i; j++) {
//     res+='*'
// }

// //space printing
// for (let j =0;j<=N-(2*i)+2; j++) {
//   res+=' ';
// }
//  //stars printing

// for (let j =1;j<=i; j++) {
// res+='*';
// }



// console.log(res);

// }

// for (let i = 1; i <=N-1; i++) {
// let res = '';

// //star printing 
// for (let j =0;j<N-i; j++) {
//   res+='*'
// }

// //space printing
// for (let j =0;j<2*i; j++) {
//   res+=' ';
// }
// //star printing 
// for (let j =0;j<N-i; j++) {
//   res+='*'
// }

// console.log(res);

// }




