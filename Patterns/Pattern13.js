function Pattern12 (N) {

  let num=1;

for(i=1;i<=N;i++){
  
   let res=' ';

   // numbers 
 for(j=1;j<=i;j++){

   res=res+' '+num;
   num++;
 }

 console.log(res)

    }

  } 



  Pattern12(5)
