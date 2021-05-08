function IsPrime(num) {
        prime=true;
    for (let i=2; i<=Math.sqrt(num);i++){
        if(num%i==0){
        prime=false;
        break;
        }
    }
    return prime;
}
number=600851475143;
pfactor=new Array()
for (let j =2; j <= number+1; j++) {
    if (IsPrime(j)==true &&number%j==0){
        pfactor.push(j);
        number/=j;
        LPF=j;
    }
    
}
// for loop goes from lower value of j to higher values . why did I want to keep all prime factors in an 
// array and sort them ? it wasn't nessecary to keep all prime factors.

console.log(LPF)
