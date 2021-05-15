
//  method 1 Euclid's formula
var t0=performance.now();
let a=b=c=0;
let m=2
while(a<1000,b<1000,c<1000){
    for(let n=1; n<m; n++ ){
    a=Math.pow(m,2)-Math.pow(n,2);
    b=2*m*n;
    c=Math.pow(m,2)+Math.pow(n,2);
     if(a+b+c==1000){
    console.log("m=",m,"n:",n,"a:",a,"b:",b,"c:",c)
    console.log(a*b*c)
    break;
     }
     } 
  
     m++
}
var t1=performance.now();
console.log("it took :",t1-t0, "milliseconds.") // took less than 1 ms 


//  method 2:brute force
// var t0=performance.now();
// for(let i=1; i<1000;i++){
//     for(let j=1;j<1000; j++){
//         for(let k=1; k<1000; k++){
//             if ((i*i+j*j)==k*k &&  i<j && j<k && i+j+k==1000){
//                 console.log(i,j,k);
//                 console.log(i*j*k);
//             }
//         }
//     }
// }
// var t1=performance.now();
// console.log("it took :",t1-t0, "milliseconds.") // took 1s
// method 1 is 1000 time faster