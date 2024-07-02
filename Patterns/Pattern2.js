function Pattern2 (N) {

  for(i=1;i<=N;i++){
    let res='';
    for(j=1;j<=i;j++){
     res=res+'* ';
    }
    console.log(res);
  }
    
}

Pattern2(5)