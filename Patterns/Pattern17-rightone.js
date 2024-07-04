function Pattern17 (N) {

  let char='A';

  for(i=1;i<=N;i++){

    let charCode = 65;

    let res='';


    //spaces

    for(j=1;j<=N-i;j++){

 
      res=res+' ';
  
  
     }


    //chars 
   for(j=1;j<=(2*i)-1;j++){


    res=res+String.fromCharCode(charCode);
 

   if(i>1 && j<=i-1){
      charCode++;
   }
else{
  charCode--
}
   }
   

      //spaces

      for(j=1;j<=N-i;j++){


      res=res+' ';
    
    
       }


console.log(res)


  }


  
    } 
  

  
    Pattern17(3)
  





















    
    //pattern17 code


    // for(i=0;i<N;i++){
    
    //   let res=' ';
    
    //   //spaces 
    
    //   for(j=0;j<N-i-1;j++){
    //    res += ' ';
    
    //   }
    //   // alphabets 
    //     let num=65;
    //     let breakpoint = (2*i+1)/2
    //    for(j=1;j<=2*i+1;j++){
    
    //   res=res+String.fromCharCode(num);  
     
    //   if(j<=breakpoint){
    //    num++
    //   }
    //   else{
    //    num--;
    //   }
    
    
    // }
    //      //spaces 
    
    //      for(j=0;j<N-i-1;j++){
    //        res += ' ';
      
    //      }
    
    
    // console.log(res)
    
    //    }