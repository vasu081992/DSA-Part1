function Pattern6 (N) {

  for(i=1;i<=N;i++){
    let res=' '
    for(j=1;j<=N-i+1;j++){
       res = res+' '+j;
    }
    console.log(res);
  }
    
}

Pattern6(5)