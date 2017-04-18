/**
 * Created by SamMFFL on 17/4/18.
 */

Function.prototype.uncurrying = function () {
    var self = this;
    console.log(self);
    return function () {
        var obj = Array.prototype.shift.call(arguments);
        return self.apply(obj, arguments);
    }
}

var push = Array.prototype.push.uncurrying();

(function () {
    push(arguments, 4);
    console.log(arguments)
})(1, 2, 3);