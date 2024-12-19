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





// //initial brute force tried nov29 2024



// function palindrome(str){
    
//   str = str.toLowerCase() // important to make it small case initially
//   let n=str.length;
//   let j = n-1

//   for(let i=0;i<n-1/2;i++){
    
//     if(str[i]!==str[j]){
//             console.log(`${str} is not a palindrome`)
//             return
//     }
//     j--;
//   }
//   console.log(`the string ${str} is a palindrome`)
//   }
  
//   palindrome("Civic")


//dec 2 palindrome brute force approach 


function PalindromeBrute(str){

  str=str.toLowerCase();

  let n=str.length

  let reversedString="";

  for(i=0;i<n;i++){
 
    reversedString = reversedString+str[n-i-1]

  }

  console.log(reversedString)
  if(reversedString===str){
    return true
  }
  else{
     return false
  }
}

console.log(PalindromeBrute("level"))


//optimised palindome



function PalindromeOptimised(str){

   str=str.toLowerCase()

  let n=str.length

  for(i=0;i<Math.floor(n/2);i++){
  
    if(str[i]!==str[n-i-1]){
      return false
    }
  }

  return true

}




console.log(PalindromeOptimised("madam"))