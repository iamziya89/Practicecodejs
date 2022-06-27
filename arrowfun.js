// let num=4;
let fact=(num)=>{
    let fact=1;
    for(let i=num; i>0 ;i--){
        fact*=i;
    }
    return fact;
}
console.log(fact(4));