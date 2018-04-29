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
    this.sideMenuService.onMenuStateChange.subscribe(result => {
      setTimeout(() => {
        this.menu = !result;
      }, 20);
    });
  }

  ngOnInit() {

  }
}

