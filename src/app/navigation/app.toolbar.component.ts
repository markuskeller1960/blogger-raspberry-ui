import { Component, Output, EventEmitter,  OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import { UtilityService, MenuService } from '../service';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './html/app.toolbar.component.html',
  styleUrls: ['./styles/app.toolbar.component.scss'],
})
export class MainToolbarComponent implements OnInit, OnDestroy {

  private appName = '';
  private subscription: Subscription;

  @Output() onSideBarItemClicked: EventEmitter<any> = new EventEmitter();

  constructor(
    private utilityService: UtilityService,
    private menuService: MenuService) {}

  ngOnInit() {
    this.appName = this.utilityService.getApplicationName();
    this.subscription = this.menuService.getIconObserver().subscribe(state => this.clickSidebarIcon());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  clickSidebarIcon() {
    this.onSideBarItemClicked.emit({value: 'MainToolbarComponent:sidebarItem:clicked'});
  }

  getApplicationName(): string {
    return this.appName;
  }
}
