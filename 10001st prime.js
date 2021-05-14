//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//What is the 10 001st prime number?
function IsPrime(num){
    primestatus=true;
    if(num==1){
        primestatus=false;
        
    }
    for(let i=2; i<=Math.sqrt(num);i++){
        if(num%i==0){
            primestatus=false;
            break;
        }

    }
    return primestatus;
}
let i=0;
let j=0;

// console.log(IsPrime(11))
while(i!==10001){ 
    j++
    if(IsPrime(j)){
        i++
    }
}
console.log(j)
