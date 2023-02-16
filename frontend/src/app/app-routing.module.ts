import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorListComponent } from './actor-list/actor-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'actors', component: ActorListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
