import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DropdownMenu } from '../common';
import { MenuService } from '../service';

@Component({
  selector: 'app-main-sidenav',
  templateUrl: './html/app.sidenav.component.html',
  styleUrls: ['./styles/app.sidenav.component.scss'],
})
export class MainSidenavComponent implements OnInit {

  private menuItems: Array<DropdownMenu> = [];

  @Output() onSideBarItemClicked: EventEmitter<any> = new EventEmitter();

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.getItems()
      .then(items => this.menuItems = items)
      .catch(this.loadingItemsError);
  }

  getMenuItems() {
    return this.menuItems;
  }

  sidenavItemClicked() {
    this.onSideBarItemClicked.emit({value: 'MainSidenavHeaderComponent:sidebarItem:clicked'});
  }

  private loadingItemsError(error: any) {
    this.menuItems = [];
    console.log(error.message || error);
  }
}
