const fibs = {
    1: 1,
    2: 2,
};

function fib(n){
    if (!!fibs[n]) return fibs[n];
    for (let i = 3; i <= n; i++){
        fibs[i] = fibs[i-1] + fibs[i-2];
    }
    return fibs[n];
}

function euler2(){
    fib(33);
    let sum = 0;
    for (let k in fibs){
        if (fibs[k] % 2 === 0 && fibs[k] < 4000000) sum += fibs[k];
    }
    return sum;
}

console.log(euler2());