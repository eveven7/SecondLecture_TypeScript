import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any = [];
  constructor(private moviesService: MoviesService) {


  } ngOnInit(): void {
    this.movies = this.moviesService.getMovies();

  }
}