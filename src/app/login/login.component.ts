import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginUser: any;
  showHidePassword:boolean = false

  constructor(  private fb: FormBuilder,private router:Router){
    this.loginUser = this.fb.group({
      password: ['', Validators.required],
      identifier: ['', [Validators.required, Validators.email]],
    });
  }


  ValidateForm(){
    if(this.loginUser.invalid){
      alert("Enter Email and Password!!")
      this.loginUser.markAllAsTouched()
    }
    else{
       this.router.navigate(['/layout/dashboard'])
    }
    
  }
 
}
