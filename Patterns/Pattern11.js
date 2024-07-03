function Pattern11 (N) {


for(i=0;i<N;i++){

  let res='';
  let start=1

//nums printing 


for(j=1;j<=i+1;j++){

  if(j>1){
    start=start+1
    }
  res=res+start;

}

  //spaces 
for(j=0;j<N+1-(2*i);j++){


  res=res+' ';


}

//nums printing 


for(j=1;j<=i+1;j++){

  res=res+start;
  start=start-1



}




console.log(res)
}



}

Pattern11(3)






























































// for(i=0;i<N;i++){
 
//   let res='';
 
//   let start = 1;
//   if(i%2===0){
//   start=1; 
//   }
//   else {
//    start=0;
//   }
// for(j=0;j<i+1;j++){
//  res = res + start
//  start=1-start;
// }
// console.log(res)
//    }