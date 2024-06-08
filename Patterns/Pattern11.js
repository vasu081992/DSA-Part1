function Pattern11 (N) {

  for(i=0;i<N;i++){
 
     let res='';
    
     let start = 1;
     if(i%2===0){
     start=1; 
     }
     else {
      start=0;
     }
   for(j=0;j<i+1;j++){
    res = res + start
    start=1-start;
   }
   console.log(res)
      }
    } 
  
  

Pattern11(5)
