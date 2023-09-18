import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/shared/movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }
  play(){
    alert('Sorry Deze functie is niet geimplementeerd!');
  }
}
