import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {DeviceIndexModel} from '../common';

@Injectable()
export class ApplicationService {

  private activeDevice: DeviceIndexModel;

  setActiveDevice(device: DeviceIndexModel) {
    if (typeof(device) !== 'undefined') {
      this.activeDevice = device;
    }
  }

  getActiveDevice(): DeviceIndexModel {
    return this.activeDevice;
  }

  hasActiveDevice(): Observable<boolean> {
    return Observable.create(typeof(this.activeDevice) !== 'undefined' ? true : false);
  }

  private isActive(): boolean {
    return typeof(this.activeDevice) !== 'undefined' ? true : false;
  }
}
