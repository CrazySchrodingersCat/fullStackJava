import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { validateFileLocation } from 'src/app/shared/filepath.validator';
import { Movie } from 'src/app/shared/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
    movieForm: FormGroup;
    @Output() addMovie = new EventEmitter();
 
    constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.movieForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        genre: ['', Validators.required],
        year: ['2018', Validators.pattern('^[0-9]+$')]
        cover: ['', Validators.required, validateFileLocation]
    });
  }

  onSubmit(){
    this.movieService.addMovie(<Movie>this.movieForm.value);
    this.addMovie.emit();
  }

}
