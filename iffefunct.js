// let num=4;
let ans=(function fact(num){
    let fact=1;
    for(let i=num; i>0 ;i--){
        fact*=i;
    }
    return fact;
})(7);
console.log(ans);