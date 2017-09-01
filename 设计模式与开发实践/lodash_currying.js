/**
 * Created by SamMFFL on 17/4/19.
 */

var _ = require('lodash');

var abc = function (a, b, c) {
    return [a, b, c];
};

var c = _.curry(abc);

var result = c(1)(2)(3);

console.log(result);