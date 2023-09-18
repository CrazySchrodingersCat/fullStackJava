import { Injectable } from '@angular/core';
import { Movie } from '../shared/movie.model';


class MovieService {
    private movies: Movie[] = [
        new Movie('Fantastic Beasts: The Crimes of Grindelwald', 'Fantasy', 2018, 'assets/fb.jpg'),
        new Movie('Robin Hood', 'Adventure', 2018, 'assets/rh.jpg')
    ];

    constructor() { }

    getMovies() {
        return this.movies;
    }

    getMovie(index: number){
        return this.movies[index];
    }

    deleteMovie(index: number){
        this.movies.splice(index,1);
    }

    addMovie(movie: Movie){
        this.movies.push(movie);
    }
    
}