/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// Зд 1
let advertisingBox = document.querySelector(".promo__adv")
advertisingBox.innerHTML = ""

let promoContent = document.querySelector(".promo__content")
advertisingBox.style.display = "none"
promoContent.style.width = "calc(100% - 300px)";

// Зд 2
let promoGenre = document.querySelector(".promo__genre")
promoGenre.innerHTML = "Драма"

// Зд 3
let promoBg = document.querySelector(".promo__bg")
promoBg.style.background = "url('../img/bg.jpg')"

// Зд 4

let withoutSortedMovies = movieDB.movies
let sortedMovies = withoutSortedMovies.sort()
console.log(sortedMovies);

// Зд 5
let informationList = document.querySelector('.promo__interactive-list')
informationList.innerHTML = ""
sortedMovies.forEach((li, index) => {
    let list = document.createElement("li") 
    list.innerHTML = `${index + 1}.${li}`
    list.classList.add("promo__interactive-item")
    informationList.append(list)
    let deleteButton = document.createElement("div")
    deleteButton.classList.add("delete")
    list.append(deleteButton)
})
