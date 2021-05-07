// method 1 :  we didn't need to keep all elemets . why did I used an array ?:|
// Fibonacci=new Array(1,2);
// let sum=0;
// while(Fibonacci[Fibonacci.length-1]<4000000){
//      
//      if (Fibonacci[Fibonacci.length-1]%2==0) {
//         sum=sum+Fibonacci[Fibonacci.length-1]
//      }
//  Fibonacci.push(Fibonacci[Fibonacci.length-1]+Fibonacci[Fibonacci.length-2])
//  }

// console.log(Fibonacci);  
// console.log(sum);
//method 2 
let a=1 
let b=2
let sum=0;
while(b<4000000){
    if(b%2==0){
        sum=sum+b
    }
    h=a+b;
    a=b;
    b=h;

}
console.log(sum)