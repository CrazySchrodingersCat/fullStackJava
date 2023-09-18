import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor() { }

  onSubmit(): void{
    console.log(this.registerForm.value);
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl<String>('', [Validators.required,Validators.minLength(3)]),
      firstName: new FormControl<String>('', [Validators.required]),
      lastName: new FormControl<String>('', [Validators.required]),
      email: new FormControl<String>('', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      age: new FormControl<Number|null>(null, [Validators.required]),
      subscription: new FormControl<String>('', [Validators.required])
    });
  }

  get registerFormControls() {
    return this.registerForm.controls;
  }

}
