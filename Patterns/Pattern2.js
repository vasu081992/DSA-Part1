function Pattern2 (N) {

  for(i=0;i<N;i++){
    let res='';
    for(j=0;j<=i;j++){
     res=res+'* ';
    }
    console.log(res);
  }
    
}

Pattern2(5)