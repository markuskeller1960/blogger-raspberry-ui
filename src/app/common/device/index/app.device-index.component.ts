import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DeviceIndexModel } from '../../';
import { DeviceService } from '../../../service';

@Component({
  selector: 'app-device-index',
  templateUrl: 'html/app.device-index.component.html',
  styleUrls: ['styles/app.device-index.component.scss']
})

export class DeviceIndexComponent implements OnInit {

  private deviceList: Array<DeviceIndexModel> = [];

  msgAddDevice: string;
  showNewForm = false;
  position = 'after';

  @Output() onDeviceConnected: EventEmitter<DeviceIndexModel> = new EventEmitter();

  constructor(private deviceService: DeviceService ) {
    this.deviceList = this.deviceService.getDeviceList();
  }

  ngOnInit() {
    this.msgAddDevice = 'Raspberry hinzufügen';
  }

  getDevices(): Array<DeviceIndexModel> {
    return this.deviceList;
  }

  hasDevices(): boolean {
    return this.deviceList.length > 0;
  }

  addDevice() {
    this.showNewForm = true;
  }

  cancelNewDevice() {
    this.showNewForm = false;
  }

  newDeviceAdded() {
    this.showNewForm = false;
    this.deviceList = this.deviceService.getDeviceList();
  }

  deviceRemoved(device: DeviceIndexModel) {
    this.deviceService.removeDevice(device);
    this.deviceList = this.deviceService.getDeviceList();
  }

  deviceConnected(device: DeviceIndexModel) {
    console.log('connecting to device ' + device.name);
    this.onDeviceConnected.emit(device);
  }
}
