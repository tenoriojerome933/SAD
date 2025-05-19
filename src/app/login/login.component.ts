import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ConnectService } from '../connect.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email:new FormControl(null),
    password: new FormControl(null),
  })


  constructor(
    private fb: FormBuilder,
    private connectService: ConnectService,
    private router: Router
  ) {}

  loginFunc() {
    this.connectService
    .login(this.loginForm.value).subscribe(
      (result: any) => {
        console.log(result);
        localStorage.setItem('admin', JSON.stringify(result));
        if (result.success) {
          this.router.navigate(['page/home']);
        } else {
          alert(result.message);
        }
      },
      (error: HttpErrorResponse) => {
        if (error.error && error.error.message) {
          alert(error.error.message);
          this.loginForm.reset();
        } else {
          alert('An error occurred during login. Please try again.');
        }
      }
    );
  }
  
}