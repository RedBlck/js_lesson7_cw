// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, made, year, maxSpeed, engine) {
//     this.model = model;
//     this.made = made;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = () => {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
//     };
//
//     this.info = () => {
//         console.log(`модель - ${this.model}, виробник - ${made}, рік випуску - ${this.year}, максимальна швидкість - ${maxSpeed}, об'єм двигуна - ${this.engine}`)
//     };
//
//     this.increaseMaxSpeed = (newSpeed => this.maxSpeed = this.maxSpeed + newSpeed);
//
//     this.changeYear = (newValue => this.year = newValue);
//
//     this.addDriver = (driver => this.driver = driver);
// }
//
// let mazda = new Car('mazda', 'italy', 1985, 255, 2.2);
// console.log(mazda);
// mazda.drive();
// mazda.info();
// mazda.increaseMaxSpeed(25);
// mazda.changeYear(2021);
// mazda.addDriver('redblck');
// console.log(mazda);




// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, made, year, maxSpeed, engine) {
//         this.model = model;
//         this.made = made;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//         this.drive = () => {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
//         };
//         this.info = () => {
//             console.log(`модель - ${this.model}, виробник - ${made}, рік випуску - ${this.year}, максимальна швидкість - ${maxSpeed}, об'єм двигуна - ${this.engine}`)
//         };
//         this.increaseMaxSpeed = (newSpeed => this.maxSpeed = this.maxSpeed + newSpeed);
//         this.changeYear = (newValue => this.year = newValue);
//         this.addDriver = (driver => this.driver = driver);
//     }
// }
// let honda = new Car('honda', 'chine', 200, 315, 3.1);
// console.log(honda);
// honda.drive();
// honda.info();
// honda.increaseMaxSpeed(60);
// honda.changeYear(2015);
// honda.addDriver('metrediz');
// console.log(honda);




// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelushka {
      constructor(name, age, foot) {
        this.name = name;
        this.age = age;
        this.foot = foot;
    }
}

let arrPopelushka = [
    new Popelushka('katya', 18, 40),
    new Popelushka('vika', 19, 39),
    new Popelushka('olya', 17, 38),
    new Popelushka('tanya', 20, 37),
    new Popelushka('krystyna', 21, 36),
    new Popelushka('taya', 22, 35),
    new Popelushka('mariya', 18, 41),
    new Popelushka('oksana', 19, 42),
    new Popelushka('maryana', 20, 34),
    new Popelushka('vira', 20, 33),
];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let prince = new Prince('vova', 27, 34);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let i = 0; i < arrPopelushka.length; i++) {
    const popelushka = arrPopelushka[i];
    if (popelushka.foot === prince.size) {
        console.log(popelushka);
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// console.log(arrPopelushka.find(size => size.foot === prince.size));