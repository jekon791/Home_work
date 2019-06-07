function factorial(n){
    if(n!=1){return n*factorial(n-1)}else{return 1}
}

export function userNum(){
    let number=prompt("",1);
    let result=factorial(number)
    
    return console.log(result)
}
