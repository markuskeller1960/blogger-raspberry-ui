import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { DeviceIndexModel } from '../../';
import { SystemService } from '../../../service';

@Component({
  selector: 'app-device-index-item',
  templateUrl: 'html/app.device-index-item.component.html',
  styleUrls: ['styles/app.device-index-item.component.scss']
})

export class DeviceIndexItemComponent implements OnInit {

  private iconActive = 'cast_connected';
  private iconInactive = 'cast';
  private activeIconClass = 'app-device-item-active-icon';
  private inactiveIconClass = 'app-device-item-inactive-icon';

  private msgDeviceActive: string;
  private msgDeviceInactive: string;
  private msgRemoveDevice: string;
  private msgRefreshDevice: string;

  item: DeviceIndexModel;

  @Input() set deviceItem(item: DeviceIndexModel) {
    item.active = false;
    this.item = item;
    this.systemService.testConnection(item).subscribe( (json) => this.initItem(json), () => this.deactivateItem() );
  }

  @Output() onDeviceRemoved: EventEmitter<DeviceIndexModel> = new EventEmitter();
  @Output() onDeviceConnected: EventEmitter<DeviceIndexModel> = new EventEmitter();

  constructor(private systemService: SystemService) {}

  ngOnInit() {
    const status = 'Status: ';
    const ip = 'IP-Adresse: ';
    this.msgDeviceActive = `${status} ${'online'}`;
    this.msgDeviceInactive = `${status} ${'offline'}`;
    this.msgRemoveDevice = 'Dieses Raspberry aus der Liste löschen';
    this.msgRefreshDevice = 'Verbindung erneut testen';
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

  connectToDevice() {
    if (this.item.active) {
      this.onDeviceConnected.emit(this.item);
    }
  }

  getRemoveDeviceMessage(): string {
    return this.msgRemoveDevice;
  }

  getRefreshDeviceMessage(): string {
    return this.msgRefreshDevice;
  }

  refreshDevice() {
    this.systemService.testConnection(this.item).subscribe( (json) => this.initItem(json), () => this.deactivateItem() );
  }

  removeDevice() {
    this.onDeviceRemoved.emit(this.item);
  }

  private initItem(response: any) {
    console.log(this.item.ipAddress + ' is answering');
    this.item.active = response.success ? true : false;
    console.log(this.item.ipAddress + ' response success: ' + this.item.active);
  }

  private deactivateItem() {
    this.item.active = false;
    console.log(this.item.ipAddress + ' is not answering');
  }
}

