import {DropdownMenuItem} from './dropdownMenuItemModel';

export class DropdownMenu {

  private menuId: string;
  private title: string;
  private icon: string;
  private items: Array<DropdownMenuItem> = new Array<DropdownMenuItem>();

  constructor() { }

  setTitle(title: string, icon: string) {
    this.title = title;
    this.icon = icon;
  }

  getId(): string {
    return this.menuId;
  }

  setId(value: string) {
    this.menuId = value;
  }

  getTitle() {
    return this.title;
  }

  getIcon(): string {
    return this.icon;
  }

  addItem(item: DropdownMenuItem) {
    this.items.push(item);
  }

  getMenuItems() {
    return this.items;
  }
}
