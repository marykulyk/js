// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
};
let users = [
    new User(1, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125'),
    new User(2, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125'),
    new User(3, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125'),
    new User(4, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125'),
    new User(5, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125'),
    new User(6, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125'),
    new User(7, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125'),
    new User(8, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125'),
    new User(9, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125'),
    new User(10, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125'),
];
console.log(users);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = users.filter(value => value.id % 2 === 0);
console.log(filter);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
let sort = users.sort((u1, u2) => {
    return u1.id - u2.id
});
console.log(sort);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client extends User {
    constructor(id, name, surname , email, phone, order) {
        super(id, name, surname , email, phone);
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(1, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125', ['apple', 'water', 'bread', 'butter', 'cheese']),
    new Client(2, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125', ['apple', 'water', 'bread', 'cheese']),
    new Client(3, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125', ['water', 'bread', 'butter']),
    new Client(4, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125', ['apple', 'water', 'bread', 'butter', 'cheese']),
    new Client(5, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125', ['bread', 'butter', 'cheese']),
    new Client(6, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125', ['apple', 'water', 'bread', 'butter', 'cheese', 'beer']),
    new Client(7, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125', ['apple', 'water']),
    new Client(8, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125', ['apple', 'water', 'bread', 'butter', 'cheese']),
    new Client(9, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125', ['bread', 'butter', 'cheese']),
    new Client(10, 'anna', 'kyk', 'anna.kyk@gmail.com', '067258123125', ['apple', 'water', 'bread', 'butter', 'cheese', 'beer', 'oil']),
];
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortOrder = clients.sort((c1, c2) => {
    return c1.order.length - c2.order.length
})
console.log(sortOrder);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, producer, graduationYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.graduationYear = graduationYear;
    this.maxSpeed = Number(maxSpeed);
    this.engineCapacity = engineCapacity;
    this.drivers = [];
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        console.log(`Модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.graduationYear}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engineCapacity}`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed=newSpeed
        console.log(`Тепер значення максимальної швидкості ${newSpeed}`)
    };
    this.changeYear = function (newValue) {
        this.graduationYear=newValue
        console.log(`Рік випуску тепер ${newValue}`)
    };
    this.addDriver = function (driver, category) {
        let vodiy = {
            name: driver,
            skills: category,
        };
        this.drivers.push(vodiy);
    }

}
let myCar = new Car('jetta', 'volkswagen', '2016', '220', '1.4');
myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(280);
myCar.changeYear(2018);
myCar.addDriver('kokos abrikos', 'B');
console.log(myCar)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Cars extends Car {
    constructor(model, producer, graduationYear, maxSpeed, engineCapacity) {
        super(model, producer, graduationYear, maxSpeed, engineCapacity);
    }
    drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info = function () {
        console.log(`Модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.graduationYear}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engineCapacity}`)
    };
    increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed=newSpeed
        console.log(`Тепер значення максимальної швидкості ${newSpeed}`)
    };
    changeYear = function (newValue) {
        this.graduationYear=newValue
        console.log(`Рік випуску тепер ${newValue}`)
    };
    addDriver = function (driver, category) {
        let vodiy = {
            name: driver,
            skills: category,
        };
        this.drivers.push(vodiy);
    }
};
let yourCar = new Cars('patriot', 'jeep', '2020', '240', '2.4');
yourCar.drive();
yourCar.info();
yourCar.increaseMaxSpeed(280);
yourCar.changeYear(2023);
yourCar.addDriver('kokos abrikos', 'B');
console.log(yourCar)
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Cinderella(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize
}
let princesses = [
    new Cinderella('anna', '32', '42'),
    new Cinderella('olya', '22', '38'),
    new Cinderella('oksana', '16', '36'),
    new Cinderella('stasy', '18', '37'),
    new Cinderella('katya', '20', '38'),
    new Cinderella('tanya', '22', '36'),
    new Cinderella('lesya', '21', '38'),
    new Cinderella('sveta', '20', '26'),
    new Cinderella('halya', '20', '38'),
    new Cinderella('ivanka', '26', '35'),
]
class Prince extends Cinderella {
    constructor(name, age, shoeSize) {
        super(name, age, shoeSize);
    }
}
let princeHero = new Prince('katya', '20', '38');
for (const item of princesses) {
    if (item.name === 'katya' && item.age === '20' && item.shoeSize === '38') {
        console.log(item)
    }
};
let find = princesses.find((value) => value.name === 'katya' && value.age === '20' && value.shoeSize === '38');
console.log(find)



