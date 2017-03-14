/**
 * Created by SamMFFL on 17/3/14.
 */

// 简单工厂模式
function createBook(name, time, type) {
    var o = {};
    o.name = name;
    o.time = time;
    o.type = type;

    o.getName = function () {
        console.log(this.name);
    };

    return o;
}

var book1 = createBook('js book', 2014, 'js');

book1.getName();

// 安全模式类
var Demo = function () {
    if (!(this instanceof Demo)) {
        return new Demo();
    }
};
Demo.prototype = {
    show: function () {
        console.log('获取成功');
    }
}

var d = Demo();
d.show();

//安全模式创建工厂类
var Factory = function (type, content) {
    if (this instanceof Factory) {
        var s = new this[type](content);
        return s;
    } else {
        return new Factory(type, content);
    }
}

Factory.prototype = {
    Java: function (content) {
    },
    JavaScript: function (content) {
    },
    UI:function (content) {
    }
};



