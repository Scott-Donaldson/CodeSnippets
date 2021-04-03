const gcd = (a,b) => {
    if(!b){
        return a
    }
    return gcd(b, a % b)
}
const isCoprime = (a,b) => {
    return (gcd(a,b) == 1) ? true : false 
}
let coprimeCount = 0
let cofactorCount = 0

let totalRand = 100000000
let loopCount = 100000000
for(let i = 0; i < loopCount; i++ ){
    let r1 = Math.floor(Math.random() * totalRand) + 1
    let r2 = Math.floor(Math.random() * totalRand) + 1
    isCoprime(r1,r2) ? coprimeCount++ : cofactorCount++
}
console.log(Math.sqrt(6 / (coprimeCount / loopCount)))
