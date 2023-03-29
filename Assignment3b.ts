


class Circle {
    Radius: number;
    PI: number;


    constructor(Data: number)
    {
        this.Radius = Data;
        this.PI = 3.14;
    }

    calculatearea(): number {
        let Ans: number = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    }
}

var obj = new Circle(5);
var Ret: number = 0;
Ret = obj.calculatearea();
console.log("Area of circle is : " + Ret);