import { Component, Input } from '@angular/core';

import { DeviceIndexModel } from '../../';
import { DeviceService } from '../../../service';

@Component({
  selector: 'app-device-index',
  templateUrl: 'html/app.device-index.component.html',
  styleUrls: ['styles/app.device-index.component.scss']
})

export class DeviceIndexComponent {

  private deviceList: Array<DeviceIndexModel> = [];

  showNewForm = false;
  position = 'after';

  constructor(private deviceService: DeviceService ) {
    this.deviceList = this.deviceService.getDeviceList();
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
}
