/**
 * Created by SamMFFL on 17/4/25.
 */

var _ = require('lodash');

var abc = function (a, b, c) {
    return [a, b, c];
};

var curried = _.curry(abc);

var t = curried(1)(2)(3);
console.log(t);


var compose = function (f, g) {
    return function (x) {
        return f(g(x));
    }
};

var replace = function (x) {
    return x.toString().replace(/\s+/ig,'_');
};

var toLowerCase = function (x) {
    return x.toLowerCase();
}

var snakeCase = compose(replace,toLowerCase);

var b = snakeCase('SD fef');
console.log(b);