console.log("Pattern problem practices")


function Pattern1 (N) {

  for(i=1;i<=N;i++){
    let res=''
    for(j=1;j<=N;j++){
      res+='*'
    }
    console.log(res)
  }

}

Pattern1(3)