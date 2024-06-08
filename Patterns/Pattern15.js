function Pattern15 (N) {

  let num=65;

  for(i=1;i<=N;i++){
    

     let res=' ';
  
     // numbers 
   for(j=1;j<=i;j++){
  
     res=res+' '+String.fromCharCode(num);
  
  
   }

   num++;
  
   console.log(res)
  
      }
  
    } 
  
  
    Pattern15(6)
  