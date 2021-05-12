// method 1 prime factorization
function IsPrime(num){
    prime=true;
    for(i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            prime=false;
            break;
        }
    }
    return prime;
}
console.time('Execution Time');

primelist=new Array();
for(let i=2;i<=20;i++){
        if(IsPrime(i)){
        primelist.push(i);
    }
}
ans=1
n=1;
for(i=0;i<primelist.length;i++){
    while(Math.pow(primelist[i],n)<=20){
        
       ans1=Math.pow(primelist[i],n)
       //this is for debugging //console.log('primelist[i]:',primelist[i],'n:',n,'ans1:',ans1)
        n++
    }
    n=1
    ans*=ans1
}
console.log(ans)
console.timeEnd('Execution Time');

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
/*method 2 the lcm and gcd relation

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
console.time('Execution Time')
while(b<=30){
    a=lcmcalc(a,b)
    b++
}
console.log(a)
console.timeEnd('Execution Time')*/