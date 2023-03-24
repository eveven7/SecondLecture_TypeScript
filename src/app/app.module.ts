import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { MyListComponent } from './my-list/my-list.component';
import { MoviesService } from './services/movies.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CategoriesService } from './services/categories.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    NotfoundComponent,
    TvShowsComponent,
    MyListComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MoviesService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
