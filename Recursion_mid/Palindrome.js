//brute force approach 


function Palindrome (str){

   str=str.toLowerCase()
  let n = str.length;

  let i=0;
  let j=n-1;

  let reversedString=""; 

for(j=str.length-1;j>=0;j--){
  reversedString+=str[j];
}
  if(reversedString==str){
    console.log(reversedString)
    return true
  }
  else{
    return false
  }
}
let str="Kayak"

console.log("brute force approach", Palindrome(str))



//optimal approach

function Palindrome2 (str){

  str=str.replace(/[^a-zA-Z0-9]/g, '');
  str=str.toLowerCase()
  let i=0;
  let n = str.length;
while(i<=n/2){
if(str[i]!==str[n-i-1]){
  return false
}
else{
  i++
}
}
return true
}
console.log("optimized approach",Palindrome2("level,!--"))