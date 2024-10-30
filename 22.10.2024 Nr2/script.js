function Car(marka, model, rok, kolor) {
    this.marka = marka;
    this.model = model;
    this.rok = rok;
    this.kolor = kolor;
}

const car1 = new Car("Opel", "Astra", 1999, "green");
const car2 = new Car("BMW", "M5", 2008, "black");

let samochod1 = "";
for(let x in car1) {
    samochod1 += car1[x] + ", ";
}

let samochod12 = "";
for(let x in car2) {
    samochod2 += car2[x] + ", ";
}

document.getElementById("ad").innerHTML = samochod1;
document.getElementById("2").innerHTML = samochod2;
