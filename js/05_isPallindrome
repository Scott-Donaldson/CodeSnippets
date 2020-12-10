function isPalindrome(input){
    let text = input.trim()
    let strArr = text.split("")
    let reverseArr = strArr.slice().reverse();
    let flag = () => {
        let x = true
        strArr.forEach((element, index)=> {
            if(element !== reverseArr[index]) x = false
        });
        return x
    }
    return flag()
}

console.log(isPalindrome("racecar"))
