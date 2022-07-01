function even_no(num,i){
             while(num>=i){
                if(num%2==0){
                    console.log(num);
                }
                return even_no(num-1,i);
             }
}
even_no(30,1);