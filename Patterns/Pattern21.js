

function pattern21(N) {

 for(i=1;i<=N;i++){
  
  let res='';

if(i===1 || i===N){

for(j=1;j<=N;j++){
  res=res+'*'
}
}
else{

//stars
for(j=i;j<=i;j++){
  res=res+'*'

}

//space

for(j=1;j<=N-2;j++){
  res=res+' '

}

//stars

for(j=i;j<=i;j++){
  res=res+'*'

}

}
console.log(res)
 }

}

pattern21(4);



function Pattern21ShorterCode(N){



  
for (let i = 0; i <N; i++) {
  let res = '';
 //stars printing
  for (let j = 0;j<N; j++) {
    if(i===0||j===0||i===N-1||j===N-1){
    res+='*'
  } 
  else{
    res+=' '; 

  }
}
console.log(res);

}
}

Pattern21ShorterCode(4)













































// for (let i = 0; i <N; i++) {
//   let res = '';
//  //stars printing
//   for (let j = 0;j<N; j++) {
//     if(i===0||j===0||i===N-1||j===N-1){
//     res+='*'
//   } 
//   else{
//     res+=' '; 

//   }
// }
// console.log(res);
// }