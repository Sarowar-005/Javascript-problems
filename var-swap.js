var a = 5;
var b = 7;

console.log("Before swap a =", a , " B =", b);

//swap step 1
var temp = a;
var a = b;
var b = temp;

console.log("After swap a = ", a , " b =", b);


var x = 10;
var y = 20;

console.log("before swap x =", x, " y =", y);

var x = x + y;
var y = x -y;
var x = x - y;

console.log("After swap x = ", x, "b =", y);


var  p = 50;
var q = 100;
console.log("Before swap p =", p, " q = ", q);
[p, q] = [ q, p]
console.log("After swap p =", p ," q =",q);