import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movie: any = {};

  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const movieId = this.activatedRoute.snapshot.paramMap.get('id');
    this.movie = this.moviesService.getMovie(movieId || '');
  }
}
