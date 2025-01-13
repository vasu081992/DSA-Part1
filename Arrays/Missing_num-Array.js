
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

//sc and tc are O(N) and O(N)



//revision of brute force and hashing way 




function Brute_Revisit(arr11,N2){

  for(i=1;i<=N2;i++){
    let flag=0;
    for(j=0;j<N-1;j++){
      if(arr11[j]===i){
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
let N2=5
let arr11=[1,2,4,5]

console.log(Brute_Revisit(arr11,N2))


//revisit of optimised way - hashing 



function MissingNum_hashing(arr12,N3){

  //creating an empty array 

  let hash2 = new Array(N3+1).fill(0)
   
  for(i=0;i<N3-1;i++){
    hash2[arr12[i]]++;
  }

  for(i=1;i<=hash2.length;i++){
    if(hash2[i]===0){
      return i
    }
  }

}
let arr12=[1,2,4,5]
let N3=5
console.log(MissingNum_hashing(arr12,N3))


//optimised 2 way  


function SummationApproach(arr13,N4){

  let sumofFirstN = (N4*(N4+1))/2;

  let sum = 0;


  for(i=0;i<arr13.length;i++){
    sum=sum+arr13[i]
  }

  return sumofFirstN-sum;
}

let arr13 = [1,2,3,5]
let N4=5
console.log(SummationApproach(arr13,N4))


//complexity here is SC is O(1) and TC here is 0(N)




