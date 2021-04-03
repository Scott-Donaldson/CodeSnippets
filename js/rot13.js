function rot13(message){
    let output = ""
    message.split("").forEach((element)=>{
        let x = element.charCodeAt(0)
        if(x !== 32){
            let UC = (x <= 90)? true : false
            x = (UC)? ((x <= 77)? x+13 : x-13) : ((x <= 109)? x+13 : x-13)
        }
        output += String.fromCharCode(x)
    })
    return output
}
