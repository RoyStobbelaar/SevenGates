import { Component, OnInit } from '@angular/core';
import {SideMenuService} from '../services/side-menu.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {

  constructor(private _sideMenuService: SideMenuService) {

  }

  ngOnInit() {
    this._sideMenuService.setMenu(true);
  }

}
