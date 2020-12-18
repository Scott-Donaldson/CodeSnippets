let sentence = "Hello hello test Test lol this is a test hello world";

const getWordFreq = (sentence) => {
    sentence = sentence.toLowerCase();
    wordArr = sentence.split(" ");
    let wordFreqObj = {};
    wordArr.forEach((element) => {
        if(element in wordFreqObj) wordFreqObj[element]++
        else{
            wordFreqObj[element] = 1;
        } 
    })
    return wordFreqObj
}


console.log(getWordFreq(sentence));
