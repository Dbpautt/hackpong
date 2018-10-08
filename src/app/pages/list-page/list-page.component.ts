import { Component, OnInit } from '@angular/core';

import { PlayersService } from '../../services/players.service';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  players: Array<any>;

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.playersService.getAll()
    .then((players) => {
      this.players = players;
    });
  }

}
