import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { FilterMovieAccessGuard } from './guards/filter-movie-access.guard';
import { HomeComponent } from './home/home.component';
import { MyListComponent } from './my-list/my-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'my-list', component: MyListComponent},
  {path: 'tv-shows', component: TvShowsComponent},
  {path: 'movie/:id', component: HomeComponent, canActivate: [FilterMovieAccessGuard]},
  { path: 'cat/:id', component: CategoryComponent },


  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
