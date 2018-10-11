function sum() {
    var total = null;
    for (var i = 0; i < arguments.length; i++) {
        var cur = Number(arguments[i]);
        !isNaN(cur) ? total += cur : null;
    }
    return total;
}
var total = sum(10, 20, 30);
console.log(total)