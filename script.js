// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

const urlUsers = 'https://jsonplaceholder.typicode.com/users';
const wrapUsers = document.querySelector('.users');

const dataUsers = await getData(urlUsers);
console.log(dataUsers);


async function getData(url) {
    const response = await fetch(url);
    const result = response.json();
    return result;
}

const showUser = (element) => {
    wrapUsers.insertAdjacentHTML("beforeend",
    `<figure class="user" id="${element.id}">
    <img src="./img/no-photo.jpg" alt="photo">
    <a href='#'><h2 class="user__name" id="${element.id}">${element.name}</a></h2></a>
    <button class="button__del">Удалить</button>
</figure>`);
    localStorage.setItem(element.id, element);
}

const deleteButton = (button) => button.addEventListener('click', () => {
    const id = button.parentElement.id;
    localStorage.removeItem(id);
    document.getElementById(id).remove();
})

dataUsers.forEach(element => showUser(element));

const arrayButtons = document.querySelectorAll('.button__del');
arrayButtons.forEach(element => deleteButton(element));


// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const COUNT_DOGS = 10;
const urlRandomDog = 'https://dog.ceo/api/breeds/image/random';

const wrapDogs = document.querySelector('.dogs');

setInterval(async () => {
    const conreteDog = await getData(urlRandomDog);
    wrapDogs.innerHTML = `<img src='${conreteDog.message}' alt='dog photo'>`;
}, 3000);  