let arr = [1,1]
let total = 100
for(let i = arr.length; i < total; i++){
    let newNum = parseInt(arr[i-1] + arr[i - 2])
    arr[arr.length] = newNum
}
console.log(arr)
