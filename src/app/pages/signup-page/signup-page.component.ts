import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  feedbackEnabled = false;
  processing = false;
  username: string;
  password: string;
  error: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signup(form) {
    this.error = '';
    if (!form.valid)  {
      this.feedbackEnabled = true;
    } else {
      const data = {
        username: this.username,
        password: this.password,
      };
      this.processing = true;
      this.authService.signup(data)
        .then(() => {
          console.log('Signed up Yay');

        })
        .catch(error => {
          this.processing = false;
          this.error = error.error.code;
        });
    }
   }
}
