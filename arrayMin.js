var marks = [22,76,83,82,89,52,99,47,10];
var min = marks[0];
for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    if(element < min){
        min = element
    }
}
console.log("Minimum number is array: ", min);