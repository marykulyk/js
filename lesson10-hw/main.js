Date.prototype.dateFormatted = function() {
    let yyyy = this.getFullYear();
    let mm = this.getMonth() < 9 ? "0" + (this.getMonth() + 1) : (this.getMonth() + 1);
    let dd = this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
    let hh = this.getHours() < 10 ? "0" + this.getHours() : this.getHours();
    let mn = this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes();
    return "".concat(dd).concat('.').concat(mm).concat('.').concat(yyyy).concat(' ').concat(hh).concat(':').concat(mn);
};
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
document.forms.registration.addEventListener('submit', function (e) {
    e.preventDefault();
    let name = this.name.value;
    let surname = this.surname.value;
    let age = this.age.value;
    let div = document.createElement('div');
    div.innerText = `${name} ${surname} ${age}`;
    document.body.appendChild(div);
})
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
window.onload = function () {
    let loadСounter = localStorage.getItem('_loadСounter');
    if (loadСounter == null) {
        loadСounter = 1;
    } else {
        loadСounter++;
    }
    console.log(loadСounter)
    localStorage.setItem('_loadСounter', loadСounter);

    let div = document.getElementById("number");
    div.innerText = `${loadСounter}`
}
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
let saveSession = function () {
    let sessionArray = sessionStorage.getItem('pageVisits');
    if (sessionArray == null) {
        sessionArray = [];
    } else {
        sessionArray = JSON.parse(sessionArray);
    }
    let date = new Date();
    sessionArray.push(date.dateFormatted());
    sessionStorage.setItem('pageVisits', JSON.stringify(sessionArray));
}
saveSession();
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let printSession = function () {
    let printSessionArray = sessionStorage.getItem('pageVisits');
    if (printSessionArray == null) {
        printSessionArray = [];
    } else {
        printSessionArray = JSON.parse(printSessionArray);
    }
    for (const printElement of printSessionArray) {
        let div = document.createElement(`div`);
        div.innerText = `${printElement}`;
        document.body.appendChild(div)
    }
}
printSession();

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

// index100obj.html
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
// idText.html
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//     Age.html
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається