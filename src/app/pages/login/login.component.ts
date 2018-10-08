import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  feedbackEnabled = false;
  processing = false;
  username: string;
  password: string;
  error: string;

  constructor (private authService: AuthService) { }

  ngOnInit() { }

  login(form) {
    this.error = '';
    if (!form.valid)  {
      this.feedbackEnabled = true;
    } else {
      const data = {
        username: this.username,
        password: this.password,
      };
      this.processing = true;
      this.authService.login(data)
        .then(() => {
          console.log('Logged in Yay');

        })
        .catch(error => {
          this.processing = false;
          this.error = error.error.code;
        });
    }
   }
}
