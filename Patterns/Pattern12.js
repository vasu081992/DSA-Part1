function Pattern12 (N) {
    let space = 2*(N-1)

  for(i=1;i<=N;i++){
 
     let res='';

     // numbers 
   for(j=1;j<=i ;j++){
     res=res+j;
   }
  
   // space 
   for(j=1;j<=space;j++){
    res=res+ ' ';
  }

  // numbers 
  for(j=i;j>=1;j--){
    res=res+j;
  }

   console.log(res)
   space=space-2;
      }
  
    } 
  
  

    Pattern12(3)
