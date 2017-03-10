import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  templateUrl: './html/app.simple-card.component.html',
  styleUrls: ['./styles/app.simple-card.component.scss']
})

export class SimpleCardComponent {

  private icoOpen = 'expand_more';
  private icoClose = 'expand_less';
  private title: string;
  private subtitle: string;

  showContent = true;
  collapsible = true;
  toggleIcon = this.icoOpen;

  @Input() set cardSubtitle(subtitle: string) {
    this.subtitle = subtitle;
  }

  @Input() set cardTitle(title: string) {
    this.title = title;
  }

  @Input() set isOpen(status: boolean) {
    this.showContent = status;
  }

  @Input() set isCollapsible(status: boolean) {
    this.collapsible = status;
  }

  toggle() {
    this.showContent = !this.showContent;
    this.toggleIcon = this.showContent ? this.icoClose : this.icoOpen;
  }

  hasTitle(): boolean {
    return this.title && this.title.length > 0;
  }

  hasSubtitle(): boolean {
    return this.subtitle && this.subtitle.length > 0;
  }

  getTitle(): string {
    return this.title;
  }

  getSubtitle(): string {
    return this.subtitle;
  }
}
