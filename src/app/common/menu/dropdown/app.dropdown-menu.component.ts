import { Component, Input } from '@angular/core';

import {DropdownMenu} from './model/dropdown-menu.model';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './html/app.dropdown-menu.component.html',
  styleUrls: ['./styles/app.dropdown-menu.component.scss']
})

export class DropdownMenuComponent {

  private menuItems: Array<DropdownMenu> = new Array<DropdownMenu>();

  @Input() set items(items: Array<DropdownMenu>) {
    this.menuItems = items || this.menuItems;
  }

  getMenuItems (): Array<DropdownMenu> {
    return this.menuItems;
  }

  getMenuItem(index: number) {
    return this.menuItems[0];
  }
}
