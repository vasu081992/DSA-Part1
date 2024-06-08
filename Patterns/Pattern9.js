function Pattern7 (N) {

  for(i=0;i<N;i++){
 
     let res='';

    //space
    for(j=0;j<N-i-1;j++){
      res += ' ';
    }

    // star printing 
    for(j=0;j<2*i+1;j++){
      res += '*';
    }
    // space printing at end

    for(j=0;j<N-i-1;j++){
      res += ' ';
    }
    console.log(res)

  }
 
}

function Pattern8 (N) {

  for(i=0;i<N;i++){
 
     let res='';
     
    //space 
    for(j=0;j<i;j++){
      res += ' ';
    }

    // star printing 
    for(j=0;j<(2*N)-1-2*i;j++){
      res += '*';
    }
    // space printing at end

    for(j=0;j<i;j++){
      res += ' ';
    }
    console.log(res)

  }
 
}

Pattern7(5)
Pattern8(5)
