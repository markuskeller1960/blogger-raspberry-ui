import { Injectable } from '@angular/core';

import { DropdownMenu } from '../common/menu/dropdown/model/dropdown-menu.model';
import { DropdownMenuItem } from '../common/menu/dropdown/model/dropdown-menu-item.model';

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
    this.menuItems.push(this.createMenuItems('id-application'));
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
      case 'id-application':
        menu.setTitle('Anwendungen', 'assessment');
        menu.addItem(new DropdownMenuItem('Übersicht' , './application-dashboard', this.menuIcon));
        menu.addItem(new DropdownMenuItem('Anwendungen' , './application-main', this.menuIcon));
        break;
      case 'id-statistics':
        menu.setTitle('System', 'assessment');
        menu.addItem(new DropdownMenuItem('Übersicht' , './statistic-dashboard', this.menuIcon));
        menu.addItem(new DropdownMenuItem('Anwendungen' , './statistic-application', this.menuIcon));
        break;
      case 'id-settings':
        menu.setTitle('Einstellungen', 'settings');
        menu.addItem(new DropdownMenuItem('Übersicht' , './settings-list', this.menuIcon));
        menu.addItem(new DropdownMenuItem('Einstellung ändern' , './settings-edit', this.menuIcon));
        break;
      case 'id-help':
        menu.setTitle('Hilfe', 'help_outline');
        menu.addItem(new DropdownMenuItem('Dokumentation' , './help-documentation', this.menuIcon));
        menu.addItem(new DropdownMenuItem('Fehlerbehandlung' , './help-exceptions', this.menuIcon));
        menu.addItem(new DropdownMenuItem('Anwendungen' , './help-misc', this.menuIcon));
        break;
    }
    return menu;
  }
}
