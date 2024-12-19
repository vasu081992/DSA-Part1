//brute force approach 


// function Palindrome (str,i){

//   str.replace(/[^a-zA-Z0-9]/g, '');
//   str=str.toLowerCase()
//  let n = str.length;

//  if(i>=n/2){
//   return true
//  }
// if(str[i]!==str[n-i-1]){
//   return false
// }
// return Palindrome(str,i+1)

// }
// let str="madam"

// console.log("brute force approach recursion ", Palindrome(str,0))





//recursion based palindrome tried on nov29 


// function Palindrome (s,i){

//   let n = s.length; 

//   if(i>n/2){
//     return true
//   }
//   if(s[i]!==s[n-i-1]){
//     return false
//   }

//   return Palindrome(s,i+1)
// }

// console.log(Palindrome("ededededd",0))

// console.log(Palindrome("level",0))


//palindrome recursion dec2 2024


function PalindromeRecursive(str,i){

  let n=str.length;

  if(i>n){
    return true;
  }

  if(str[i]!==str[n-i-1]){
   return false
  }

  return PalindromeRecursive(str,i+1)

   


}

console.log(PalindromeRecursive("resooser",0))