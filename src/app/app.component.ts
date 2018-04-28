import {Component, OnInit} from '@angular/core';
import {SideMenuService} from './services/side-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public menu: boolean;

  constructor(public sideMenuService: SideMenuService) {

  }

  ngOnInit() {
    this.menu = this.sideMenuService.menu;
  }
}

