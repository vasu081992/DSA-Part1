function Pattern8 (N) {

  for(i=0;i<N;i++){

    let res='';

    //spaces
    for(j=1;j<=i;j++){
   
        res=res+' ';

    }

      //star
      for(j=0;j<N+4-2*i;j++){
   
        res=res+'*';

    }

    //spaces
    for(j=1;j<=i;j++){
   
      res=res+' ';

  }

    console.log(res)

  }
 
}

Pattern8(5)



















































// for(i=0;i<N;i++){
 
//   let res='';
  
//  //space 
//  for(j=0;j<i;j++){
//    res += ' ';
//  }

//  // star printing 
//  for(j=0;j<(2*N)-1-2*i;j++){
//    res += '*';
//  }
//  // space printing at end

//  for(j=0;j<i;j++){
//    res += ' ';
//  }
//  console.log(res)

// }