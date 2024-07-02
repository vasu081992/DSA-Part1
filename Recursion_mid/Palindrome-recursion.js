//brute force approach 


function Palindrome (str,i){

  str.replace(/[^a-zA-Z0-9]/g, '');
  str=str.toLowerCase()
 let n = str.length;

 if(i>=n/2){
  return true
 }
if(str[i]!==str[n-i-1]){
  return false
}
return Palindrome(str,i+1)

}
let str="madam"

console.log("brute force approach recursion ", Palindrome(str,0))





