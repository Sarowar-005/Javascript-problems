var result = [44,66,74,63,72,74,88,99,22,11,55,66];
var max = result[0];
for (let i = 0; i < result.length; i++) {
    const element = result[i];
    if(element>max){
        max = element
    }
}
console.log("Highest number is: ", max);