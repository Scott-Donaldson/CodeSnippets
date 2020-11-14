let number = "4012888888881881"
console.log(luhnAlgorithm(number))
function luhnAlgorithm(number){
    let numarr = number.split("")
    let finalNum = 0;
    numarr.forEach((element,index) =>{
        if(index % 2 == 0){
            let num = parseInt(element) * 2
            if(num > 9){
                let digitArr = (num + "").split("")
                let reducer = (a,b) => parseInt(a) + parseInt(b)
                num = (digitArr.reduce(reducer))
            }
            finalNum += (num + parseInt(numarr[index + 1]))
        }
    })
    return (finalNum % 10 == 0)? true : false
}
