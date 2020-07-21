var marks = [22,33,55,44,66,77,88,99];
var sum = 0;
for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    sum = element + sum;
}
console.log(sum);



function getArraySum(number){
    var sum = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        sum = sum + element
    }
    return sum
}


var nun = [22,33,44,55,66,77,88,99];
var result = getArraySum(nun);
console.log(result);


var num2 = [11,22,33,44,55,66,77,88,99];
var result2 = getArraySum(num2);
console.log(result2);


var num3 = [222,333,444,555,666,777,888,999]
var result3 = getArraySum(num3);
console.log(result3);