function Pattern10 (N) {

  for(i=1;i<=2*N-1;i++){
 
    let res="";

    if(i>N){

      res='';

      for(j=1;j<=2*N-i;j++){
        res=res+'*';
    }
  }
  else{
    for(j=1;j<=i;j++){

  res= res +"*"

    }
  }

    console.log(res)

  }
}


Pattern10(6)











































// for(i=0;i<(2*N)-1;i++){
 
//   let res='';

//   if (i>=N){
//    for(j=0;j<(2*N)-(i+1);j++){
//      res+='*'
//       }
//   }
//   else {
//   for(j=0;j<i+1;j++){
//   res+='*'
//    }
//  }
//    console.log(res)
//   }
