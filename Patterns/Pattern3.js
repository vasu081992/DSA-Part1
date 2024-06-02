function Pattern3 (N) {

  for(i=0;i<=N;i++){
    let res=''
    for(j=1;j<=i;j++){
     res+=j;
    }
    console.log(res);
  }
    
}

Pattern3(5)