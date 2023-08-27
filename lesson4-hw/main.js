// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calc(a, b) {
    let result = a * b;
    return result;
}
let S = calc(2, 3);
console.log(S);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r) {
    let area = 3.14 * r * r;
    return area;
}
let s = circle(5);
console.log(s);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r - Sцил =2πR(H + R),
function cylinder(h, R) {
    let areaCylinder = 2 * 3.14 * R * (h + R);
    return areaCylinder;
}
let c = cylinder(5, 14);
console.log(c);

// - створити функцію яка приймає масив та виводить кожен його елемент
function array(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
array(users);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text) {
    document.write(`<p>${text}</p>`);
}
paragraph('hello');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(argument) {
    document.write(`
        <ul>
            <li>${argument}</li>
            <li>${argument}</li>
            <li>${argument}</li>
        </ul>
    `)
}
list('okten');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function roster(element, count = 3) {
    document.write(`<ul>`)
    for (let i=0; i < count; i++) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul>`)
}
roster('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua');
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function easy(...x) {
    console.log(x);
}
easy('phobe', 25, true, 2, 32, 'joe', false, 14, 365);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function printArray(arr) {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`);
    }
}
let ids = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
];
printArray(ids);
// - створити функцію яка повертає найменьше число з масиву
function numberMin(arr) {
    let min = numbers[0];
    for (const arrElement of arr) {
      if (arrElement < min) {
          min = arrElement;
      }
    }
    return min;
}
let numbers = [123, 58, 69, 21, 147, 8, 74, 36];
console.log(numberMin(numbers));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let result = 0;
    for (i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}
console.log(sum(numbers));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
    return arr;
}
console.log(swap(numbers, 2, 5));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

currencyValues = [
    {currency:'USD',value:40},
    {currency:'EUR',value:42},
];
function exchange(cash, currencyArray, selectedCurrency = 'USD') {
    for (const currencyItem of currencyArray) {
        if (currencyItem.currency == selectedCurrency) {
            return (cash / currencyItem.value).toFixed(2);
        }
    }
    return cash;
}
console.log(exchange(5254.94255555, currencyValues, 'EUR'));