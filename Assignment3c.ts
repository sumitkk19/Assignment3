

class CircleX {
    Radius: number;
    PI: number;


    constructor(Data: number) {
        this.Radius = Data;
        this.PI = 3.14;
    }

    CircumferenceOfCircle(): number {
        let Ans: number = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    }

    CalculateArea(): number {
        let Ans: number = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    }
}
var obj = new CircleX(5);



var obj = new CircleX(5);
var Ret: number = 0;
Ret = obj.CalculateArea();
console.log("Area of circle is : " + Ret);


Ret = obj.CircumferenceOfCircle();
console.log("Circumference of circle isss : " + Ret);
