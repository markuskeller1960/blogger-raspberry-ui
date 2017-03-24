import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {DeviceIndexModel} from '../common';

@Injectable()
export class ApplicationService {

  private connectedDevice: BehaviorSubject<DeviceIndexModel>;
  private connected: BehaviorSubject<boolean>;

  constructor() {
    this.connectedDevice = new BehaviorSubject<DeviceIndexModel>(null);
    this.connected = new BehaviorSubject<boolean>(false);
  }

  setConnectedDevice(device: DeviceIndexModel) {
    if (typeof(device) !== 'undefined') {
      this.connectedDevice.next(device);
      this.connected.next(true);
      console.log('Connected device has been changed successfully');
    } else {
      this.connected.next(false);
      this.connectedDevice.next(null);
      console.log('Connected device has been set to null!');
    }
  }

  getConnectedDevice(): Observable<DeviceIndexModel> {
    return this.connectedDevice.asObservable();
  }

  isConnected(): Observable<boolean> {
    return this.connected.asObservable();
  }
}
