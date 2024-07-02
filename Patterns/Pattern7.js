function Pattern7 (N) {

  for(i=0;i<N;i++){

    let res='';

    //spaces
    for(j=1;j<=N-i;j++){
   
        res=res+' ';

    }
      //star
      for(j=0;j<2*i+1;j++){
   
        res=res+'*';

    }

    for(j=1;j<=N-i;j++){
   
      res=res+' ';

  }

    console.log(res)

  }


}

Pattern7(5)


























































// for(i=0;i<N;i++){
 
//   let res='';

//  //space
//  for(j=0;j<N-i-1;j++){
//    res += ' ';
//  }

//  // star printing 
//  for(j=0;j<2*i+1;j++){
//    res += '*';
//  }
//  // space printing at end

//  for(j=0;j<N-i-1;j++){
//    res += ' ';
//  }
//  console.log(res)

// }