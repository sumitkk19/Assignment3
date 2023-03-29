

class Arithematic {
  
    No1: number;
    No2: number;

    constructor(A: number, B: number) {
        this.No1 = A;
        this.No2 = B;
    }

    Addition(): number {
        return this.No1 + this.No2;
    }

    Substraction(): number {
        return this.No1 - this.No2;
    }

    Multiplication(): number {
        return this.No1 * this.No2;
    }

    Division(): number {
        return this.No2 % this.No2;
    }
}
var obj11 = new Arithematic(20, 5);
var obj22 = new Arithematic(30, 28);

var Ret: number = 0;

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