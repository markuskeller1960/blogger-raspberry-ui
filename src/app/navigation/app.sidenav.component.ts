import { Component, OnInit } from '@angular/core';

import { DropdownMenu } from '../common/menu';
import { MenuService } from '../service';

@Component({
  selector: 'app-main-sidenav',
  templateUrl: './html/app.sidenav.component.html',
  styleUrls: ['./styles/app.sidenav.component.scss'],
})
export class MainSidenavComponent implements OnInit {

  private menuItems: Array<DropdownMenu> = [];

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
    this.menuService.sidenavItemClicked();
  }

  private loadingItemsError(error: any) {
    this.menuItems = [];
    console.log(error.message || error);
  }
}
