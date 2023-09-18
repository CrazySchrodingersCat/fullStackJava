import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/shared/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movies: Movie[];
  constructor(private movieService: MovieService){
  }

  ngOnInit(){
   this.refreshList();
  }
  
  refreshList(){
    this.movies = this.movieService.getMovies();
  }
}
