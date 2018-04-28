import { Component, OnInit } from "@angular/core";
import {SideMenuService} from '../services/side-menu.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})

export class WorldComponent implements OnInit {

  constructor(private _sideMenuService: SideMenuService) {

  }

  ngOnInit() {
    this._sideMenuService.setMenu(true);
  }

}
