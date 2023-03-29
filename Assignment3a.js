var Arithematic = /** @class */ (function () {
    function Arithematic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithematic.prototype.Addition = function () {
        return this.No1 + this.No2;
    };
    Arithematic.prototype.Substraction = function () {
        return this.No1 - this.No2;
    };
    Arithematic.prototype.Multiplication = function () {
        return this.No1 * this.No2;
    };
    Arithematic.prototype.Division = function () {
        return this.No2 % this.No2;
    };
    return Arithematic;
}());
var obj11 = new Arithematic(20, 5);
var obj22 = new Arithematic(30, 28);
var Ret = 0;
Ret = obj11.Addition();
console.log("Addition of obj11 : " + Ret);
Ret = obj11.Substraction();
console.log("Substraction of obj11 : " + Ret);
Ret = obj11.Multiplication();
console.log("Multiplication of obj11 : " + Ret);
Ret = obj11.Division();
console.log("Division of obj11 : " + Ret);
Ret = obj22.Addition();
console.log("Addition of obj22 : " + Ret);
Ret = obj22.Substraction();
console.log("Substraction of obj22 : " + Ret);
Ret = obj22.Multiplication();
console.log("Multiplication of obj22 : " + Ret);
Ret = obj22.Division();
console.log("Division of obj22 : " + Ret);
