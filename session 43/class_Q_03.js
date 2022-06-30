function fun(n,i){
    //   console.log(n);
      while(n>=1){
        console.log(n);
        return fun(n-1,i)
      }
}
fun(10,1)