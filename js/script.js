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

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      wrapper = document.querySelector('.promo__interactive'),
      movieList = wrapper.querySelector('.promo__interactive-list'),
      films = wrapper.querySelectorAll('.promo__interactive-item');

adv.forEach(item => {
    item.remove();
});
genre.textContent = 'драма';
poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = '';

movieDB.movies.sort();
// console.log(poster.innerHTML);

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});


// const ol = document.createElement('ol');
// ol.classList.add('promo__interactive-list');
// ol.style.cssText = 'list-style-type: unset;';
// // document.body.append(ol);
// filmsList.replaceWith(ol);


// filmsList.innerHTML = '<ol></ol>';
// films.forEach((item, i) => {
//     item.innerHTML = movieDB.movies.sort()[i];
// });
// console.log(films);