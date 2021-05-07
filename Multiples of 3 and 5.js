// find the sum of natural numbers bellow 1000 that are multiples of 3 and 5 
/*method 1

var x=0;
for (let i = 0; i < 1000; i++) {
    if (i%3==0 | i%5==0 ) {
        x=x+i;
    }
    
}
console.log(x)*/
//method2
var x=0;
var num=0;
while(num<1000){
    if(num%3==0 | num%5==0){
        x=x+num;
    }
num +=1;
}
console.log(x)
