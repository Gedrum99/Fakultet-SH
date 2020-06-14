class Kwadrat{ 

    constructor(bok){
        this.bok = bok;
    }
    get getBok(){
        return this.bok;
    }
    set setBok(wartosc){
        this.bok = wartosc;
    }
    pole(){
        return this.bok * this.bok;
    }
    obwod(){
        return this.bok * 4;
    }
    
}

class Prostokat{ 

    constructor(bokA,bokB){
        this.bokA = bokA;
        this.bokB = bokB;
    }
    get getBokA(){
        return this.bokA;
    }
    get getBokB(){
        return this.bokB;
    }
    set setBokA(wartosc){
        this.bokA = wartosc;
    }
    set setBokB(wartosc){
        this.bokB = wartosc;
    }
    pole(){
        return this.bokA * this.bokB;
    }
    obwod(){
        return this.bokA*2 + this.bokB*2;
    }
    
}

class Trojkat extends Kwadrat{ 
    constructor(bok,wysokosc){
        super(bok);
        this.wysokosc = wysokosc;
    }
    get getWysokosc(){
        return this.wysokosc;
    }
    set setWysokosc(wartosc){
        this.wysokosc = wartosc;
    }
    trianglepole(){
        return (this.bok*this.wysokosc)/2;
    }
    triangleobwod(){
        return this.bok*3;
    }
    
    
}
let square = new Kwadrat(6);
square.bok = 8;
console.log(square.bok);
console.log("pole "+square.pole());
console.log("obwód "+square.obwod());

let triangle=new Trojkat(3,4)
console.log(triangle.bok)
console.log(triangle.wysokosc)
console.log("pole "+triangle.trianglepole())
console.log("obwód "+triangle.triangleobwod())

