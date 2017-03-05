import { Component, Input, OnInit } from '@angular/core';

import { DeviceIndexModel } from '../../';

@Component({
  selector: 'app-device-index-item',
  templateUrl: 'html/app.device-index-item.component.html',
  styleUrls: ['styles/app.device-index-item.component.scss']
})

export class DeviceIndexItemComponent implements OnInit{

  private iconActive = 'cast_connected';
  private iconInactive = 'cast';
  private activeIconClass = 'app-device-item-active-icon';
  private inactiveIconClass = 'app-device-item-inactive-icon';

  private msgDeviceActive: string;
  private msgDeviceInactive: string;

  item: DeviceIndexModel;

  @Input() set deviceItem(item: DeviceIndexModel) {
    this.item = item;
  }

  ngOnInit() {
    const status = 'Status: ';
    const ip = 'IP-Adresse: ';
    this.msgDeviceActive = `${status} ${'online'}`;
    this.msgDeviceInactive = `${status} ${'offline'}`;
  }

  getIcon(): string {
    return this.item.active ? this.iconActive : this.iconInactive;
  }

  getIconClass(): string {
    return this.item.active ? this.activeIconClass : this.inactiveIconClass;
  }

  getDeviceAvailableMessage(): string {
    return this.item.active ? this.msgDeviceActive : this.msgDeviceInactive;
  }

  getDeviceIpMessage(): string {
    return `${'IP-Adresse: '} ${this.item.ipAddress}`;
  }

  getDevicePortMessage(): string {
    return `${'Port: '} ${this.item.port}`;
  }
}

