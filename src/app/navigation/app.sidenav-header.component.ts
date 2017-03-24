import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ApplicationService } from '../service';
import { DeviceIndexModel } from '../common';

@Component({
  selector: 'app-main-sidenav-header',
  templateUrl: 'html/app.sidenav-header.component.html',
  styleUrls: ['styles/app.sidenav-header.component.scss'],
})

export class MainSidenavHeaderComponent implements OnInit, OnDestroy {

  private activeDeviceSubscription: Subscription;
  private deviceActive = false;

  activeDevice: DeviceIndexModel;
  msgRunningHost: string;

  @Output() onSideBarItemHeaderClicked: EventEmitter<any> = new EventEmitter();

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.activeDeviceSubscription = this.applicationService.getConnectedDevice()
      .subscribe((device) => this.initDevice(device));
    this.msgRunningHost = 'läuft auf Host';
  }

  ngOnDestroy() {
    this.activeDeviceSubscription.unsubscribe();
  }

  clickSidebarIcon() {
    this.onSideBarItemHeaderClicked.emit({value: 'MainSidenavHeaderComponent:sidebarItem:clicked'});
  }

  hasActiveDevice(): boolean {
    return this.deviceActive;
  }

  private initDevice(device: DeviceIndexModel) {
    this.activeDevice = device;
    this.deviceActive = true;
  }
}
