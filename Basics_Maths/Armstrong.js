function armstrong(x){
  let originalNumber = x;

  let sum = 0;
  while(x>0){

    let lastdigit = x%10;
    sum = sum + (lastdigit*lastdigit*lastdigit)
    x=Math.floor(x/10)

  }

if(sum===originalNumber){
  return true
}
else{
  return false

}


} 
console.log(armstrong(153))
 

