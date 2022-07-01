function Odd_no(i,num){
    while(i<=num){
        if(i%2==1){
            console.log(i); 
        }
        return Odd_no(i+1,num);
    }
    
}
Odd_no(1,20);