
//brute force way - important


function Missing_Num_method2(arr2,N1){
 
  for(i=1;i<=N1;i++){
    let flag=0;
  
    for(j=0;j<N1-1;j++){
      if(arr2[j]===i){
        flag=1
        break;
      }
    }

    if(flag===0){
      return i
    }
  }

    return -1
}
let arr2=[1,3]
let N1=3
console.log(Missing_Num_method2(arr2,N1))



//using Hashing 


function missNum_Hashing(arr10,N){

  let hash1 = new Array(N+1).fill(0)

  for(let i=0;i<N-1;i++){
    hash1[arr10[i]]++
  }

console.log('Hash',hash1)
  for (let i = 1; i <= N; i++) {
    if (hash1[i] === 0) {
      return i;
    }

}

}
let arr10 = [1,2,3,5]
let N=5
console.log(missNum_Hashing(arr10,N))