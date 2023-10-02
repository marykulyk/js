// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
let users = function () {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then((users) => {
            let wrapper = document.createElement('div');
            wrapper.classList.add('wrapper');
            for (const user of users) {
                let div = document.createElement('div');
                let a = document.createElement('a');
                let h3 = document.createElement('h3');
                h3.innerText = `${user.id}.${user.name}`
                a.innerText = `More`;
                a.href = './user-details.html?id=' + JSON.stringify(user.id);
                div.append(h3, a);
                wrapper.appendChild(div);
            }
            document.body.appendChild(wrapper);
        });
};
//
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
let userInfo = function () {
    let url = new URL(location.href);
    let userId = url.searchParams.get('id');
    fetch('http://jsonplaceholder.typicode.com/users/' + userId)
        .then(value => value.json())
        .then((user) => {
            let html = `
                <div id="main">
                    <div>
                        <div><p>id: ${user.id}</p></div>
                        <div><p>name: ${user.name}</p></div>
                        <div><p>username: ${user.username}</p></div>
                        <div><p>email: ${user.email}</p></div>
                    </div>
                    <div id="addres_info">
                        <p>addres of user:</p>
                        <ul class="list">
                            <li>street: ${user.address.street}</li>
                            <li>suite: ${user.address.suite}</li>
                            <li>city: ${user.address.city}</li>
                            <li>zipcode: ${user.address.zipcode}</li>
                            <li>geo: lat: ${user.address.geo.lat}, lng: ${user.address.geo.lng}</li>
                        </ul>
                    </div>
                    <div class="user-info" "contact_info">
                        <p>phone: ${user.phone}</p>
                        <p>website: ${user.website}</p>
                    </div>
                    <div>
                        <p>company info:</p>
                        <ul class="list">
                            <li>name: ${user.company.name}</li>
                            <li>catchPhrase: ${user.company.catchPhrase}</li>
                            <li>bs: ${user.company.bs}</li>
                        </ul>
                </div>
                </div>
                <div id="button_post">
                    <button onclick="printTitle(${user.id})">post of current user</button>
                </div>
            `;
            document.getElementById('wrapper').innerHTML = html;
        })
};
let printTitle = function (idUser) {
    fetch('https://jsonplaceholder.typicode.com/users/' + idUser + '/posts')
        .then(value => value.json())
        .then(posts => {
            let html = '';
            for (const post of posts) {
                html += `<div><a href="post-details.html?post_id=${post.id}">title: ${post.title}</a></div>`;
            }
            document.getElementById('posts_title').innerHTML = html;
        });
};

//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
let printPosts = function () {
    let url = new URL(location.href);
    let postID = url.searchParams.get('post_id');
    fetch('http://jsonplaceholder.typicode.com/posts/' + postID)
        .then(value => value.json())
        .then(post => {
           let html = `
                <div id="post_info">   
                    <div><p>Info about post</p></div>
                    <div><p>userId: ${post.userId}</p></div>
                    <div><p>postId: ${post.id}</p></div>
                    <div><p>title: ${post.title}</p></div>
                    <div><p>text: ${post.body}</p></div>
                </div>
                <div id="button_comments">
                    <button onclick="printComments(${post.id})">comments of post</button>
                </div>
           `;
            document.getElementById('wrapper').innerHTML = html;
        });
};
let printComments = function (postId) {
    console.log(postId)
        fetch('http://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
            .then(value => value.json())
            .then(comments => {
                console.log(comments)
                let html = '';
                for (const comment of comments) {
                    html += `
                        <div id="comment">
                        <div><p>commentId: ${comment.id}</p></div>
                        <div><p>name: ${comment.name}</p></div>
                        <div><p>email: ${comment.email}</p></div>
                        <div><p>comment: ${comment.body}</p></div>
                        </div>
                    `;
                    document.getElementById('comment_info').innerHTML = html;
                };
            });
};
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)