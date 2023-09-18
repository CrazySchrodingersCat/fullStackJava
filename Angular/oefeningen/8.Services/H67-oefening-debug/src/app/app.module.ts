import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { MovieService } from './services/movie.service';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    AddMovieComponent,
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
