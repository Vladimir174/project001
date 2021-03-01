"use strict";

/* if (4 == 9) {
    console.log('Ok!');
} else{
    console.log('Error!');
}




if (num < 49) {
    console.log('Error');
    } else if (num >  100) {
        console.log('Много');
    } else {
        console.log('Ok');
    }


(num === 50) ? console.log('Ok') : console.log('Error'); */

/* const num = 50;
switch (num) {
    case 49: 
        console.log('Неверно');
        break;
    case 100: 
        console.log('Неверно');
        break;
    case 51:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз');
        break;
        } */

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* ;

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних прсмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних прсмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */

/* const infPerson = [];

infPerson[0] = prompt('Name ', '');
infPerson[1] = prompt('Surname ', '');
infPerson[2] = prompt('Age ', '');

document.write(infPerson);
document.write(`https://vk.com/${infPerson[1]}/${infPerson[0]}/${infPerson[2]}`);

alert(`Привет , ${infPerson[0]}`); */


let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}