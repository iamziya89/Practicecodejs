function fact(num,facto){
    if(num>0){
        facto*=num;
        console.log(facto,num,"4")
        return fact(num-1,facto)
        console.log("6")
    }
    else{
        console.log(facto,num,"8")
        return facto;
        console.log(facto,num,"10")
    }
}
console.log(fact(5,1));