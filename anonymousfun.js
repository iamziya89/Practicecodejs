let ans=(function (num){
    let sum=0;
    while(num!=0){
        rem=num%10;
        sum=sum+rem**2;
        num=Math.floor(num/10);
    }
    return sum;
})(26);
console.log(ans);