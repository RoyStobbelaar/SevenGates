import {Injectable} from '@angular/core';


@Injectable()
export class SideMenuService {

  public menu = false;

  public setMenu(menu: boolean) {
    this.menu = menu;
  }

  public getMenu(): boolean {
    return this.menu;
  }

}
