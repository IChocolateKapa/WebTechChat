/**
 * Created by Echo on 2015/11/12.
 */

function sor(p) {
    return function(a, b) {
        var num1 = a[p];
        var num2 = b[p];
        if (num1 < num2) {
            return - 1;
        } else if (num1 > num2) {
            return 1;
        } else {
            return 0;
        }
    };
}
var d = [
    {
        name: "zhangsan",
        age: 28
    },
    {
        name: "lisi",
        age: 25
    }
];
//d.sort(sor(name));
console.log(d[1].name);