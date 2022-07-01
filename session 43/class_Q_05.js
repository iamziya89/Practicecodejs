function range(num,last){
    while(num<last){
        if(num%2==0){
            console.log(num);  
            
        }
        return range(num+1,last);
    }
    
}
range(1,10)