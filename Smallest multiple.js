// Lcm (Largest common multiple)of 4 & 6 & 9: (2^2) & (3*2)&(3^2) = 36
/*
for 1:20 
find the primes 
count the number primes factor for each and get the max number of prime factor 
multiply max powers

*/
// function IsPrime(num){
//     prime=true;
//     for(i=2;i<=Math.sqrt(num);i++){
//         if(num%i==0){
//             prime=false;
//             break;
//         }
//     }
//     return prime;

// }
function gcdcalc(a,b){
    let gcd =1;

for(let i=2; i<=Math.min(a,b); i++){
    if (a%i==0 && b%i==0 && i>gcd){
        gcd=i;
    }
}
return gcd;
}

function lcmcalc(a,b){
    
    lcm=(a*b)/gcdcalc(a,b);
    return lcm;

}
a=1;
b=2;
while(b<=10){
    a=lcmcalc(a,b)
    b++
}
console.log(a)