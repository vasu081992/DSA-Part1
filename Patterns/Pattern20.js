

function pattern18(N) {

  for (let i = 0; i <N; i++) {
    let res = '';
   //stars printing
    for (let j = 0;j<N; j++) {
      if(i===0||j===0||i===N-1||j===N-1){
      res+='*'
    } 
    else{
      res+=' '; 

    }
  }
  console.log(res);
}
}

pattern18(3);



  



