import { Component, Input } from '@angular/core';

import { ContentCardHeaderModel } from './model/ContentCardHeaderModel';

@Component({
  selector: 'app-content-header-card',
  templateUrl: './html/app.content-header-card.component.html',
  styleUrls: ['styles/app.content-header-card.component.scss']
})

export class ContentHeaderCardComponent {

  private headerData: ContentCardHeaderModel;

  constructor() {
    this.headerData = new ContentCardHeaderModel('', '',  '');
  }

  @Input() set data(data: ContentCardHeaderModel) {
    this.headerData = data || this.headerData;
  }

  getTitle(): string {
    return this.headerData.getTitle();
  }

  getImage(): string {
    return this.headerData.getImage();
  }

  getSubtitle(): string {
    return this.headerData.getSubtitle();
  }

  hasImage(): boolean {
    return this.hasValue(this.headerData.getImage());
  }

  hasSubTitle(): boolean {
    return this.hasValue(this.headerData.getSubtitle());
  }

  private hasValue(value: string): boolean {
    return value && value.length > 0 ? true : false;
  }
}
