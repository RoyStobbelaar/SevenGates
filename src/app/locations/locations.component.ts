import { Component, OnInit } from '@angular/core';
import {SideMenuService} from '../services/side-menu.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})


export class LocationsComponent implements OnInit {

  constructor(private _sideMenuService: SideMenuService) {

  }

  ngOnInit() {
    this._sideMenuService.setMenu(true);
  }

}
