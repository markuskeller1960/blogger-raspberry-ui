import { Injectable } from '@angular/core';

import { DropdownMenu } from '../common/menu/dropdown/model/dropdownMenuModel';
import { DropdownMenuItem } from '../common/menu/dropdown/model/dropdownMenuItemModel';

@Injectable()
export class MenuService {

  private menuItems: Array<DropdownMenu> = [];
  private menuIcon = 'more_vert';

  getItems(): Promise<Array<DropdownMenu>>  {
    return Promise
      .resolve(this.createMenu())
      .catch(this.onError);
  }

  private createMenu(): Array<DropdownMenu>  {
    this.menuItems = [];
    this.menuItems.push(this.createMenuItems('id-settings'));
    this.menuItems.push(this.createMenuItems('id-statistics'));
    this.menuItems.push(this.createMenuItems('id-help'));
    return this.menuItems;
  }

  private onError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  private createMenuItems(index: string): DropdownMenu {
    const menu: DropdownMenu = new DropdownMenu();
    menu.setId(index);
    switch ( index ) {
      case 'id-statistics':
        menu.setTitle('Statistics', 'assessment');
        menu.addItem(new DropdownMenuItem('Dashboard' , 'statistic-dashboard', this.menuIcon));
        menu.addItem(new DropdownMenuItem('Application Statistics' , 'statistic-application', this.menuIcon));
        menu.addItem(new DropdownMenuItem('Raspberry Statistics' , 'statistic-server', this.menuIcon));
        break;
      case 'id-settings':
        menu.setTitle('Settings', 'settings');
        menu.addItem(new DropdownMenuItem('List Settings' , 'settings-list', this.menuIcon));
        menu.addItem(new DropdownMenuItem('Edit Setting' , 'settings-edit', this.menuIcon));
        break;
      case 'id-help':
        menu.setTitle('Help', 'help_outline');
        menu.addItem(new DropdownMenuItem('Documentation' , 'help-documentation', this.menuIcon));
        menu.addItem(new DropdownMenuItem('Error Handling' , 'help-exceptions', this.menuIcon));
        menu.addItem(new DropdownMenuItem('Miscellaneous' , 'help-misc', this.menuIcon));
        break;
    }
    return menu;
  }
}
