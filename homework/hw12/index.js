//Constructor & Classes Task№1
class Car {
constructor(brand, age) {
  this.brand = brand;
  this.age = age;
}
  getBrand() {
    return this.brand[0].toUpperCase() + this.brand.substr(1);
}
  getAge() {
    return  new Date().getFullYear() - this.age; 
  }
}

let lexus = new Car(`lexus`, 2);
console.log(lexus);
console.log(lexus.getBrand());
console.log(lexus.getAge());

//Constructor & Classes Task№2
class Enigma {
  constructor(str) {
    this.str = str;
  }
  decryption() {
    return this.str.split('').reverse().join('');
  }
  encription() {
    return this.str
  }
}

let shiphr = new Enigma(`.edoc siht tuo erugif t'nac uoY`);

console.log(shiphr.encription());
console.log(shiphr.decryption());
