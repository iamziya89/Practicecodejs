function fabo(first,second,count){
    if(count<=10){
        console.log(first);
        let c=first+second;
        return fabo(second,c,count+1)
    }
}
fabo(1,1,1)