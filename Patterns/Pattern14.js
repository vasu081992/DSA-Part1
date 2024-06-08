function Pattern14 (N) {


for(i=1;i<=N;i++){
  
  let num=65;

   let res=' ';

   // numbers 
 for(j=1;j<=i;j++){

   res=res+' '+String.fromCharCode(num);

    num++
 }

 console.log(res)

    }

  } 



  Pattern14(5)
