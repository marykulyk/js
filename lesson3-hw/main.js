// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
const arr1 = [123, 'name', true, 50, 'float', -56, 3.14, false, 'number', 32658];
console.log(arr1[0], arr1[1], arr1[2], arr1[3], arr1[4], arr1[5], arr1[6], arr1[7], arr1[8], arr1[9]);
let book1 = {
    title: 'Harry Potter',
    pageCount: 598,
    genre: 'fantasy'
};
console.log(book1);
let book2 = {
    title: 'The Lord of the Rings',
    pageCount: 958,
    genre: 'adventure'
};
console.log(book2);
let book3 = {
    title: 'Jane Eyre',
    pageCount: 425,
    genre: 'novel'
};
console.log(book3);
book1 = {
    title: 'Harry Potter',
    pageCount: 598,
    genre: 'fantasy',
    authors: [
        {
            name: 'Joanne Rowling',
            age: 58,
        }
    ],
};
console.log(book1);
book2 = {
    title: 'The Lord of the Rings',
    pageCount: 958,
    genre: 'adventure',
    authors: [
        {
            name: 'John Ronald Reuel',
            age: 81,
        },
        {
            name: 'John Doe',
            age: 33,
        },

    ],
};
console.log(book2);
book3 = {
    title: 'Jane Eyre',
    pageCount: 425,
    genre: 'novel',
    authors: [
        {
            name: 'Charlotte Brontë',
            age: 38,
        },
        {
            name: 'Phoebe Buffay',
            age: 25,
        },

    ],
};
console.log(book3);
// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
const users = [
    {
        name: 'Rachel Green',
        username: 'Rachel22',
        password: 'qwds125fjf',
    },
    {
        name: 'Monica Geller',
        username: 'iKnow',
        password: 'jdhgsgvsj256',
    },
    {
        name: 'Phoebe Buffay',
        username: 'myEyes',
        password: '125455jdgdgfvbgh12',
    },
    {
        name: 'Joey Tribbiani',
        username: 'howYouDoing',
        password: '1gjkfcnhur55220',
    },
    {
        name: 'Chandler Bing',
        username: 'bigBing',
        password: '1rhfydh12bggrf2',
    },
    {
        name: 'Ross Geller',
        username: '4husband',
        password: '021551554102pkjg',
    },
    {
        name: 'Jennifer Aniston',
        username: 'breadP',
        password: '0njdcdhbcjdn',
    },
    {
        name: 'Courteney Cox',
        username: 'cocococo',
        password: '2151chdgshdggdsh',
    },
    {
        name: 'Lisa Kudrow',
        username: 'foxfox',
        password: '2yrgehgsfsvcxfxcbvcbhhfb11',
    },
    {
        name: 'Matt LeBlanc',
        username: 'pizzzaaa',
        password: '10111jhfhfbfb1010',
    },
];
console.log(users[0].password, users[1].password, users[2].password, users[3].password, users[4].password, users[5].password, users[6].password, users[7].password, users[8].password, users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 28;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
x = 1;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
x = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
x = -3;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('Введіть хвилину від 0 до 59');
if (time >= 0 && time < 15) {
    console.log('Перша чверть');
} else if (time >= 15 && time < 30) {
    console.log('Друга чверть');
} else if (time >= 30 && time < 45) {
    console.log('Третя чверть');
} else if (time >= 45 && time < 60) {
    console.log('Четверта чверть');
} else {
    console.log('Невірна хвилина!')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Введіть день від 1 до 31');
if (day >= 1 && day < 11) {
    console.log('Перша декада');
} else if (day >= 11 && time < 21) {
    console.log('Друга декада');
} else if (day >= 21 && time < 32) {
    console.log('Третя декада');
} else {
    console.log('Невірний день')
}
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
let numberDay = +prompt('Введіть день тижня від 1 до 7');
switch (numberDay) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Введіть день тижня від 1 до 7');
        break;
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let number1 = +prompt('Введіть перше число');
let number2 = +prompt('Введіть друге число');
if (number1 > number2) {
    console.log(number1);
} else if (number1 < number2) {
    console.log(number2);
} else {
    console.log('Введені числа рівні');
}
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let X = '';
X = X || 'default';
console.log(X);
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}


