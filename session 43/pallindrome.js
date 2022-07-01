function pallindrome(no,sum,new_no){
    if(no!=0){
        let r=no%10;
        sum=sum*10+r;
        no=Math.floor(no/10);
        return pallindrome(no,sum,new_no)
    }
    console.log(sum);
    if(new_no=sum){
        return "pallindrome"
    }else{
        return "not a pallindrome"
    }
}
pallindrome(121,0,122);