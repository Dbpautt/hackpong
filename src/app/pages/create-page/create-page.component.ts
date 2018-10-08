import { Component, OnInit } from '@angular/core';

import { PlayersService } from '../../services/players.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;

  players: Array<any>;
  newPlayer: any = {
    name: '',
    level: ''
  };

  constructor(private playersService: PlayersService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.playersService.create(this.newPlayer)
      .then((result) => {
        this.router.navigate(['/list'], result.id);
      })
      .catch((err) => {
        this.error = err.error.code;
        this.processing = false;
        this.feedbackEnabled = false;
      });
    }
  }

}
