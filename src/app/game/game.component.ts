import { Component, OnInit } from '@angular/core';
import {SideMenuService} from '../services/side-menu.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {

  constructor(private _sideMenuService: SideMenuService) {

  }

  ngOnInit() {
    this._sideMenuService.setMenu(true);
  }

}
