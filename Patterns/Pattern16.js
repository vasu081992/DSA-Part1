function Pattern16 (N) {

  for(i=0;i<N;i++){
    
     let res=' ';
  
     //spaces 

     for(j=0;j<N-i-1;j++){
      res += ' ';

     }
     // alphabets 
       let num=65;
       let breakpoint = (2*i+1)/2
      for(j=1;j<=2*i+1;j++){
  
     res=res+String.fromCharCode(num);  
    
     if(j<=breakpoint){
      num++
     }
     else{
      num--;
     }


   }
        //spaces 

        for(j=0;j<N-i-1;j++){
          res += ' ';
     
        }

  
   console.log(res)
  
      }
  
    } 
  
  
    Pattern16(5)
  