function Pattern16 (N) {
 
  let char='A';
  let charCode = 65;

  for(i=1;i<=N;i++){


    let res='';

   

    for(j=1;j<=i;j++){


     res=res+' '+String.fromCharCode(charCode);


    }

    charCode=charCode+1;

console.log(res)
  }





  
    } 
  
  
    Pattern16(3)
  








    

























