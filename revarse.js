function reverseStr(str){
    var reverse = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var statement = "Bangladesh";
var output = reverseStr(statement);
console.log(output);