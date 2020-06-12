"use strict";

const numbersOfFilms = prompt('Please Answer', 'Please, enter the number of films you viewed');

const personalMovieDB = {
    count:  numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let i = 0, films = [], rates = [];
do {
    films[films.length] = prompt('A Movie You Watched Last Time', 'Enter the name, please.');
    rates[rates.length] = prompt('What\'s the rate you should set for it?', 'Enter the Rate, please.');
    i++;
}
while (i <= 1);

const movies = {};
personalMovieDB.movies[films[0]] = rates[0];
personalMovieDB.movies[films[1]] = rates[1];
