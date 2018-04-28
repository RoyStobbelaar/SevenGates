import { Component, OnInit } from '@angular/core';
import {SideMenuService} from '../services/side-menu.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'menu-grid',
  templateUrl: './menu-grid.component.html',
  styleUrls: ['./menu-grid.component.scss']
})

export class MenuGridComponent implements OnInit {


  constructor(private _sideMenuService: SideMenuService) {

  }

  ngOnInit() {
    this._sideMenuService.setMenu(false);
  }

}
