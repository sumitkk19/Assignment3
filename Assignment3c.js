var CircleX = /** @class */ (function () {
    function CircleX(Data) {
        this.Radius = Data;
        this.PI = 3.14;
    }
    CircleX.prototype.CircumferenceOfCircle = function () {
        var Ans = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    };
    CircleX.prototype.CalculateArea = function () {
        var Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return CircleX;
}());
var obj = new CircleX(5);
//var Ret = obj.CalculateArea();
//var Ret = obj.CircumferenceOfCircle();
//var circumference = obj.CircumferenceOfCircle();
//Ret = obj.CircumferenceOfCircle();
//console.log("Circumference of circlee is : " + obj);
//var circleX = obj.CalculateArea();
//Ret = obj.CalculateArea();
//console.log("Area of circle  : " + obj);
var obj = new CircleX(5);
var Ret = 0;
Ret = obj.CalculateArea();
console.log("Area of circle is : " + Ret);
//var obj = new CircleX(5);
//var Ret: number = 0;
Ret = obj.CircumferenceOfCircle();
console.log("Circumference of circle isss : " + Ret);
