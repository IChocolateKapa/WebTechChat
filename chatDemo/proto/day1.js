/**
 * Created by Echo on 2015/11/17.
 */

var  sayName = function(){};
sayName.prototype.name = "Echo";
sayName.prototype.age = 24;

var sayWhat = function(){};
sayWhat.prototype = sayName;
sayWhat.prototype.gender = "女";

console.log(sayWhat.prototype)
