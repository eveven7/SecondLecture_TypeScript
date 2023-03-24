import { Injectable } from '@angular/core';

import { moviesList } from '../shared/data';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  getMovies() { return moviesList.movies; }
  getMoviesByCategory(id: string) {
    return moviesList.movies.filter((movie) => movie.categoryId.toString() == id);
  }
}
