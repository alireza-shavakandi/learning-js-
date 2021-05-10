function IsPalindrome(num){
    palindrome=true;

    digits = new Array()
    while (Math.floor((num*10)/10)!==0) {//check num*10 inorder to have the final (first) digit.
        digits.push(num%10)
        num=Math.floor(num/10)
    }
for(let i=0; i<digits.length/2;i++){
    if(digits[digits.length-1-i]!==digits[0+i]){
        palindrome=false;
        break;
    }
}
    return palindrome;

}
let x=500*500;
for (let i=100; i<=999; i++){
    for(let j=i; j<999; j++){
        if(IsPalindrome(i*j)&& i*j>x){//check if it is the largest 
            x=i*j
            console.log(i,j,x)
        
        }
    }

}
console.log(x)
