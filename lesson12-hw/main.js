// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
let list = function () {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then((users) => {
        let ul = document.createElement('ul');
        for (const user of users) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.innerText = `${user.id} - ${user.name}`;
            a.href = './user-details.html?id=' + JSON.stringify(user.id);
            li.appendChild(a);
            ul.appendChild(li);
        }
        document.body.appendChild(ul);
    });
};
let printUser = function () {
    let url = new URL(location.href);
    let userId = url.searchParams.get('id');
    fetch('http://jsonplaceholder.typicode.com/users/' + userId)
    .then(value => value.json())
    .then((user) => {
        let div = document.createElement('div');
        let h3Name = document.createElement('h3');
        let h5Username = document.createElement('h5');
        let h5Email = document.createElement('h5');
        let h5Address = document.createElement('h5');
        let h5Phone = document.createElement('h5');
        let h5Website = document.createElement('h5');
        let h5Company = document.createElement('h5');
        h3Name.innerText = 'name:' + ' ' + JSON.stringify(user.name);
        h5Username.innerText = 'username:' + ' ' + JSON.stringify(user.username);
        h5Email.innerText = 'email:' + ' ' + JSON.stringify(user.email);
        h5Address.innerText = 'address:' + ' ' + JSON.stringify(user.address);
        h5Phone.innerText = 'phone:' + ' ' + JSON.stringify(user.phone);
        h5Website.innerText = 'website:' + ' ' + JSON.stringify(user.website);
        h5Company.innerText = 'company:' + ' ' + JSON.stringify(user.company);
        div.append(h3Name, h5Username, h5Email, h5Address, h5Phone, h5Website, h5Company);
        document.body.appendChild(div)
    })
};
