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