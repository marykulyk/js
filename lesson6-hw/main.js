// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let ho = 'hello world';
console.log(ho.length);
let li = 'lorem ipsum';
console.log(li.length);
let jc = 'javascript is cool';
console.log(jc.length);
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log(ho.toUpperCase());
console.log(li.toUpperCase());
console.log(jc.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const hello = 'HELLO WORLD';
console.log(hello.toLowerCase());
const lorem = 'LOREM IPSUM';
console.log(lorem.toLowerCase());
const java = 'JAVASCRIPT IS COOL';
console.log(java.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.replace(' ', ''));
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let text = 'Ревуть воли як ясла повні';
let arr = [];
arr.push('Ревуть');
arr.push('воли');
arr.push('як');
arr.push('ясла');
arr.push('повні');
console.log(arr);
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0];
let map = numbers.map(number => number.toString());
console.log(map);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
let sortAscending = nums.sort((u1,u2) => u1-u2);
console.log(sortAscending);
let sortDescending = nums.sort((u2,u1) => u1-u2);
console.log(sortDescending);
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
let sort = coursesAndDurationArray.sort((a,b) => {
   return a.monthDuration - b.monthDuration
})
console.log(sort);
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}
let mapId = coursesAndDurationArray.map(value => {
    value.id = uuidv4();
    return value;
})
console.log(mapId);
//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cardDeck = {
    cards: [
        {cardSuit: 'spade', value: '6', color: 'black'},
        {cardSuit: 'spade', value: '7', color: 'black'},
        {cardSuit: 'spade', value: '8', color: 'black'},
        {cardSuit: 'spade', value: '9', color: 'black'},
        {cardSuit: 'spade', value: '10', color: 'black'},
        {cardSuit: 'spade', value: 'jack', color: 'black'},
        {cardSuit: 'spade', value: 'queen', color: 'black'},
        {cardSuit: 'spade', value: 'king', color: 'black'},
        {cardSuit: 'spade', value: 'ace', color: 'black'},
        {cardSuit: 'diamond', value: '6', color: 'red'},
        {cardSuit: 'diamond', value: '7', color: 'red'},
        {cardSuit: 'diamond', value: '8', color: 'red'},
        {cardSuit: 'diamond', value: '9', color: 'red'},
        {cardSuit: 'diamond', value: '10', color: 'red'},
        {cardSuit: 'diamond', value: 'jack', color: 'red'},
        {cardSuit: 'diamond', value: 'queen', color: 'red'},
        {cardSuit: 'diamond', value: 'king', color: 'red'},
        {cardSuit: 'diamond', value: 'ace', color: 'red'},
        {cardSuit: 'heart', value: '6', color: 'red'},
        {cardSuit: 'heart', value: '7', color: 'red'},
        {cardSuit: 'heart', value: '8', color: 'red'},
        {cardSuit: 'heart', value: '9', color: 'red'},
        {cardSuit: 'heart', value: '10', color: 'red'},
        {cardSuit: 'heart', value: 'jack', color: 'red'},
        {cardSuit: 'heart', value: 'queen', color: 'red'},
        {cardSuit: 'heart', value: 'king', color: 'red'},
        {cardSuit: 'heart', value: 'ace', color: 'red'},
        {cardSuit: 'clubs', value: '6', color: 'black'},
        {cardSuit: 'clubs', value: '7', color: 'black'},
        {cardSuit: 'clubs', value: '8', color: 'black'},
        {cardSuit: 'clubs', value: '9', color: 'black'},
        {cardSuit: 'clubs', value: '10', color: 'black'},
        {cardSuit: 'clubs', value: 'jack', color: 'black'},
        {cardSuit: 'clubs', value: 'queen', color: 'black'},
        {cardSuit: 'clubs', value: 'king', color: 'black'},
        {cardSuit: 'clubs', value: 'ace', color: 'black'},
    ],
//  - знайти піковий туз
    findAceOfSpades: () => {
        for (const card of cardDeck.cards) {
            if (card.cardSuit == 'spade' && card.value == 'ace') {
                return card;
            }
        }
        return {};
    },
//  - всі шістки
    findAllSixes: () => {
        let result = [];
        for (const card of cardDeck.cards) {
            if (card.value == '6') {
                result.push(card);
            }
        }
        return result;
    },
//  - всі червоні карти
    findAllRed: () => {
        let result = [];
        for (const card of cardDeck.cards) {
            if (card.color == 'red') {
                result.push(card);
            }
        }
        return result;
    },
//  - всі буби
    findAllDiamonds: () => {
        let result = [];
        for (const card of cardDeck.cards) {
            if (card.cardSuit == 'diamond') {
                result.push(card);
            }
        }
        return result;
    },
//  - всі трефи від 9 та більше
    findAllClubs: () => {
        let result = [];
        for (const card of cardDeck.cards) {
            if (card.cardSuit == 'clubs' && card.value !== '6' && card.value !== '7' && card.value !== '8') {
                result.push(card);
            }
        }
        return result;
    },
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
    search: () => {
        return cardDeck.cards.reduce(function (accumulator, card) {
            switch (card.cardSuit) {
                case 'spade':
                    accumulator[0].push(card);
                    break;
                case 'diamond':
                    accumulator[1].push(card);
                    break;
                case 'heart':
                    accumulator[2].push(card);
                    break;
                case 'clubs':
                    accumulator[3].push(card);
                    break;
            }
            return accumulator;

        }, [[],[],[],[]]);
    }
}
console.log(cardDeck.findAceOfSpades());
console.log(cardDeck.findAllSixes());
console.log(cardDeck.findAllRed());
console.log(cardDeck.findAllDiamonds());
console.log(cardDeck.findAllClubs());
console.log(cardDeck.search());

// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker