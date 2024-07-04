function Pattern18 (N) {
 


  for(i=1;i<=N;i++){

    let charCode = 65+N-i;

    let res='';

    for(j=1;j<=i;j++){

if(j>1){
  charCode++
}
res=res+' '+String.fromCharCode(charCode);

  }
console.log(res)
// charCode=charCode-1;

  }
}


  
  
    Pattern18(6)