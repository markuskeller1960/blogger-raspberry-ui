import { Component, OnInit } from '@angular/core';

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

  constructor(private deviceService: DeviceService ) {
    this.deviceList = this.deviceService.getDeviceList();
  }

  ngOnInit() {
    this.msgAddDevice = 'Gerät hinzufügen';
  }

  getDevices(): Array<DeviceIndexModel> {
    return this.deviceList;
  }

  addDevice() {
    this.showNewForm = true;
  }

  cancelNewDevice() {
    this.showNewForm = false;
  }

  newDeviceAdded() {
    console.log('Added XXXXXXXXXXXXXXXXXXXXXXX');
  }
}
