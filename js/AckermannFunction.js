function ackermann(m, n){
    let ans;
    if(m == 0) ans = n + 1
    else if(n == 0)ans = ackermann(m - 1, 1)
    else ans = ackermann(m - 1, ackermann (m, n-1))
    return ans;
}
console.log(ackermann(4,1))
