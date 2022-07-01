function noOfDigit(n,i){
    n=Math.abs(n);
    while(n>0){
        let dig=n%10;
        i=i+1;
        n=Math.floor(n/10);
        return noOfDigit(n,i)
    }

    console.log(i);
}
noOfDigit(-1523,0)