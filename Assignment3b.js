var Circle = /** @class */ (function () {
    function Circle(Data) {
        this.Radius = Data;
        this.PI = 3.14;
    }
    Circle.prototype.calculatearea = function () {
        var Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var obj = new Circle(5);
var Ret = 0;
Ret = obj.calculatearea();
console.log("Area of circle is : " + Ret);
