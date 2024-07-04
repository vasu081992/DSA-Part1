function Pattern15 (N) {

  
  for(i=1;i<=N;i++){

    let charCode = 65;
    let res='';

    let char='A';

    for(j=1;j<=N-i+1;j++){


     res=res+' '+String.fromCharCode(charCode);

     charCode=charCode+1;


    }

console.log(res)
  }




    } 
  
  
    Pattern15(6)
  





















































  //   let num=65;

  // for(i=1;i<=N;i++){
    

  //    let res=' ';
  
  //    // numbers 
  //  for(j=1;j<=i;j++){
  
  //    res=res+' '+String.fromCharCode(num);
  
  
  //  }

  //  num++;
  
  //  console.log(res)
  
  //     }
  