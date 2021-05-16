function IsPrime(num){
    primestatus=true;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i==0){
            primestatus=false;
            break;
        }
    }
    return primestatus;
}
var t0=performance.now();
let sum=2;
let i=3
while(i<=2000000){
    if(IsPrime(i)){
        sum+=i;
    }
    //  console.log("i",i,"sum",sum)
    i+=2;
}
console.log(sum)
var t1=performance.now();
console.log("it took ",t1-t0,"miliseconds")