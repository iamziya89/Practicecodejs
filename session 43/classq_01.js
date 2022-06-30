function fact(num,facto){
    if(num>0){
        facto*=num;
        return fact(num-1,facto)
    }
    else{
        return facto;
    }
}
console.log(fact(5,1));