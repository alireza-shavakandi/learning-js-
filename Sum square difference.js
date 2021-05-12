//Find the difference between the sum of the squares of
// the first one hundred natural numbers and the square of the sum.
let sumofsuqre=0;
let sum=0;
for(let i=1; i<=100;i++){
    squre=Math.pow(i,2)
    sumofsuqre+=squre;
    sum+=i;
}
console.log(Math.pow(sum,2)-sumofsuqre)
