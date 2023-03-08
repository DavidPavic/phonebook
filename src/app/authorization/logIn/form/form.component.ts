import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';
import { AuthorizationGuard } from 'src/app/core/route-guards/authorization.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})

export class FormComponent implements OnInit {

  loginForm!: FormGroup;

  constructor( private formBuilder: FormBuilder, private loginService: LoginService, private authorizationGuard: AuthorizationGuard, private route: Router) {}

  validationPattern = '[a-zA-Z0-9!#$%&?]*';
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.validationPattern)]]
    })   
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  Submit() {
    this.loginService.isLogged = true; 
  }
}