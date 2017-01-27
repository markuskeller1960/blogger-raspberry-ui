import { Component, Output, EventEmitter,  OnInit } from '@angular/core';

import { UtilityService } from '../service';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './html/app.toolbar.component.html',
  styleUrls: ['./styles/app.toolbar.component.scss'],
})
export class MainToolbarComponent implements OnInit {

  private appName = '';

  @Output() onSideBarItemClicked: EventEmitter<any> = new EventEmitter();

  constructor(private utilityService: UtilityService) {}

  ngOnInit() {
    this.appName = this.utilityService.getApplicationName();
  }

  clickSidebarIcon() {
    this.onSideBarItemClicked.emit({value: 'MainToolbarComponent:sidebarItem:clicked'});
  }

  getApplicationName(): string {
    return this.appName;
  }
}
