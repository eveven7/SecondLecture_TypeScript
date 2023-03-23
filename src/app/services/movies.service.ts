import { Injectable } from '@angular/core';

import { moviesList } from '../shared/data';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  getMovies() { return moviesList.movies; }

}
