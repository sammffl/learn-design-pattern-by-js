/**
 * Created by SamMFFL on 2017/1/4.
 */

//var CheckObject = {
//    checkName: function () {},
//    checkEmail: function () {},
//    checkPassword: function () {}
//};
//=========================================================
//var CheckObj = function () {};
//CheckObj.checkName = function(){};
//CheckObj.checkEmail = function(){};
//CheckObj.checkPassword = function(){};
//=========================================================
//var CheckObject =function(){
//    return {
//        checkName:function(){},
//        checkEmail:function(){},
//        checkPassword:function(){},
//    };
//}
//var a = CheckObject();
//a.checkEmail();
//=========================================================
//var CheckObject = function(){
//    this.checkName = function(){};
//    this.checkEmail = function(){};
//    this.checkPassword = function(){};
//};
//
//var a = new CheckObject();
//a.checkEmail();
//=========================================================
//var CheckObject = function(){};
//CheckObject.prototype.checkName = function(){};
//CheckObject.prototype.checkEmail = function(){};
//CheckObject.prototype.checkPassword = function(){};
//var a = new CheckObject();
//a.checkEmail()
//=========================================================
//var CheckObject = {
//    checkName: function(){
//        return this;
//    },
//    checkEmail:function(){
//        return this;
//    },
//    checkPassword:function(){
//        return this;
//    }
//};
//
//CheckObject.checkEmail().checkName().checkPassword();
//=========================================================
//var CheckObject = function () {
//};
//CheckObject.prototype = {
//    checkName: function () {
//        return this;
//    },
//    checkEmail: function () {
//        return this;
//    },
//    checkPassword: function () {
//        return this;
//    }
//};
//var a = new CheckObject();
//a.checkEmail().checkName().checkPassword();
//=========================================================
//Function.prototype.checkEmail = function () {
//    console.log(1)
//};
//var f = function () {
//};
//f.checkEmail();
//=========================================================
//Function.prototype.addMethod = function (name, fn) {
//    this[name] = fn;
//};
//
//var methods = function(){};
//methods.addMethod('checkName',function(){console.log(12)});
//methods.checkName();
//=========================================================
//Function.prototype.addMethod = function (name, fn) {
//    this[name] = fn;
//    return this;
//};
//var methods = function () {
//};
//methods.addMethod('checkName', function () {
//    console.log(12);
//    return this;
//}).addMethod('checkEmail', function () {
//    console.log(34);
//    return this;
//});
//methods.checkName().checkEmail();
//=========================================================
Function.prototype.addMethod = function (name, fn) {
    this.prototype[name] = fn;
    return this;
};
var Methods = function () {
};
Methods.addMethod('checkName', function () {
    console.log(1)
});
var m = new Methods();
m.checkName();
//=========================================================