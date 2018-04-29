import {Injectable, Output, EventEmitter} from '@angular/core';


@Injectable()
export class SideMenuService {

  public menu = false;
  @Output() onMenuStateChange: EventEmitter<boolean> = new EventEmitter();

  public setMenu(menu: boolean) {
    this.menu = menu;
    this.onMenuStateChange.emit(this.menu);
  }

  public getMenu(): boolean {
    return this.menu;
  }

}
