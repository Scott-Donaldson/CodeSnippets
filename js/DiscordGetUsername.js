getUser = function(message, position) {
    var userArr = message.match(/([@-])[\w-]+/g);
    if(position > userArr.length) return "";
    return userArr[position - 1].substring(1);
};
