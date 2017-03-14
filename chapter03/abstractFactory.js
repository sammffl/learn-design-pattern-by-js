/**
 * Created by SamMFFL on 17/3/14.
 */

var Car = function () {
};

Car.prototype = {
    getPrice: function () {
        return new Error('抽象方法不能调用');
    },
    getSpeed: function () {
        return new Error('抽象方法不能调用');
    }
};


//抽象工厂方法
var VehicleFactory = function (subType, superType) {
    //判断抽象工厂中是否有该抽象类
    if (typeof VehicleFactory[superType] === 'function') {
        //缓存类
        function F() {
        };
        // 继承父类属性和方法
        F.prototype = new VehicleFactory[superType]();
        // 将子类constructor指向子类
        subType.constructor = subType;
        // 子类原型继承父类
        subType.prototype = new F();
    } else {
        throw new Error('为创建该抽象类');
    }
};

VehicleFactory.Car = function () {
    this.type = 'car';
};
VehicleFactory.Car.prototype = {
    getPrice: function () {
        return new Error('抽象方法不能调用');
    },
    getSpeed: function () {
        return new Error('抽象方法不能调用');
    }
};

VehicleFactory.Bus = function () {
    this.type = 'bus';
};
VehicleFactory.Bus.prototype = {
    getPrice: function () {
        return new Error('抽象方法不能调用');
    },
    getPassengerNum: function () {
        return new Error('抽象方法不能调用');
    }
};


var BMW = function (price, speed) {
    this.price = price;
    this.speed = speed;
};
VehicleFactory(BMW, 'Car');

BMW.prototype.getPrice = function () {
    return this.price;
};

BMW.prototype.getSpeed = function () {
    return this.speed;
};

var d = new BMW(3000, 200);
console.log(d.getSpeed());


// VehicleFactory(toyota,'Car');
//
// toyota.getSpeed();