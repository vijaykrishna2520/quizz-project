import { Input } from '@angular/core';
import { Component } from '@angular/core';
// import { Console } from '@angular/core/src/console';
import { FormControl } from '@angular/forms';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { question } from '../model/questionModel';

@Component({
  selector: 'my-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class formComponent {
  fullname!:string;
  password!:string;
  saveEmployee(empForm:any): void {
    console.log(empForm.value);
  }

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      //send the obj to database
      console.log(this.loginForm.value);
    }
  }

  submit() {
    this.onSubmit();
    this.router.navigateByUrl('/home');
  }

}
