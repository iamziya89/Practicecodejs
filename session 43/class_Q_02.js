function range(i,n){
    while(i<=n){
        console.log(i);
        return range(i+1,n)
    }
}
range(1,10);