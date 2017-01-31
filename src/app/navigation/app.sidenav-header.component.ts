import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-sidenav-header',
  templateUrl: 'html/app.sidenav-header.component.html',
  styleUrls: ['styles/app.sidenav-header.component.scss'],
})

export class MainSidenavHeaderComponent {

  @Output() onSideBarItemHeaderClicked: EventEmitter<any> = new EventEmitter();

  clickSidebarIcon() {
    this.onSideBarItemHeaderClicked.emit({value: 'MainSidenavHeaderComponent:sidebarItem:clicked'});
  }
}
