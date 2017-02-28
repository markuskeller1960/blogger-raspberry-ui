export class DropdownMenuItem {
  private label: string;
  private link: string;
  private icon: string;

  constructor(label: string, link: string, icon: string) {
    this.label = label;
    this.link = link;
    this.icon = icon;
  }

  getLink(): string {
    return this.link;
  }

  getLabel(): string {
    return this.label;
  }

  getIcon(): string {
    return this.icon;
  }
}
