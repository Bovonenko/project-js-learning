/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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
      films = wrapper.querySelectorAll('.promo__interactive-item'),
      add = document.querySelector('.add'),
      input = add.querySelector('.adding__input'),
      btn = add.querySelector('button');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    let newFilm;
    if (input.value.length > 21) {
        newFilm = input.value.slice(0, 21) + '...';
    }
    movieDB.movies.push(newFilm);
    input.value  = '';
    console.log(movieDB.movies);
});

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