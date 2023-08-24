// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let x = 0; x < 10; x++) {
    document.write(`<div>Lorem</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let x = 0; x < 10; x++) {
    document.write(`<div>${'ipsum'} ${x}</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let y = 0;
while (y < 20) {
    document.write(`<h1>Lorem ipsum</h1>`);
    y++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i = 0;
while (i < 20) {
    document.write(`<h1>${i} Lorem ipsum</h1>`);
    i++;
}
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (let index = 0; index < listOfItems.length; index++) {
    document.write(`<li>${listOfItems[index]}</li>`);
}
document.write(`</ul>`);

//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let e = 0; e < products.length; e++) {
    document.write (`
        <div class="product-card">
            <h3 class="product-title">${products[e].title} Price - ${products[e].price}</h3>
            <img src="${products[e].image}" alt="${products[e].title}" class="product-image">
        </div>
    `);

}
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------
//     є масив
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
document.write(`<p>користувачі зі статусом true</p>`);
for (let q = 0; q < users.length; q++) {
    if (users[q].status){
        document.write(`<p>${users[q].name}</p>`);
    }
}
document.write(`<p>користувачі зі статусом false</p>`);
for (let q = 0; q < users.length; q++) {
    if (!users[q].status){
        document.write(`<p>${users[q].name}</p>`);
    }
}
document.write(`<p>користувачі які старші за 30 років</p>`);
for (let q = 0; q < users.length; q++) {
    if (users[q].age >= 30){
        document.write(`<p>${users[q].name}</p>`);
    }
}

// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років