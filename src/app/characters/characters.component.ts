import { Component, OnInit } from '@angular/core';
import {SideMenuService} from '../services/side-menu.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent implements OnInit {

  constructor(private _sideMenuService: SideMenuService) {

  }

  ngOnInit() {
    this._sideMenuService.setMenu(true);
  }

}
