import { Injectable } from '@angular/core';

import {DeviceIndexModel} from '../common/model/deviceIndexModel';
import {LocalStorageService} from './localStorage.service';

@Injectable()
export class DeviceService {

  private itemName = 'raspi.deviceIndex';
  private deviceIndex: Array<DeviceIndexModel> = [];

  constructor(private localStorageService: LocalStorageService) {
    this.deviceIndex = localStorageService.loadObject(this.itemName);
    this.deviceIndex = this.deviceIndex != null ? this.deviceIndex : [];
  }

  hasDefaultDevice(): boolean {
    return this.deviceIndex.length > 0;
  }

  getDefaultDevice(): DeviceIndexModel {
    if (this.deviceIndex.length > 0) {
      const list: Array<DeviceIndexModel> = this.deviceIndex.filter(this.isDefault);
      return list.length > 0 ? list[0] : this.deviceIndex[0];
    }
    return null;
  }

  saveDevice(device: DeviceIndexModel) {
    this.addDevice(device);
  }

  removeDevice(device: DeviceIndexModel) {
    const index = this.isInList(device);
    if (index > -1 && index < this.deviceIndex.length) {
      this.deviceIndex.splice(index, 1);
      this.storeItem();
    }
  }

  findDevice(ipAddress: string, port: string): DeviceIndexModel {
    let found = null;
    for (let device of this.deviceIndex) {
      if (device.ipAddress === ipAddress && device.port === port) {
        found = device;
      }
    }
    return found;
  }

  getDeviceList(): Array<DeviceIndexModel> {
    return this.deviceIndex;
  }

  private addDevice(device: DeviceIndexModel) {
    let index = this.isInList(device);
    if (index > 0) {
      this.deviceIndex.splice(index, 1);
    }
    this.deviceIndex.push(device);
    this.storeItem();
  }

  private isInList(searchDevice: DeviceIndexModel): number {
    let found = -1;
    for (let i = 0; i <  this.deviceIndex.length; i++) {
      let device = this.deviceIndex[i];
      if (device.ipAddress === searchDevice.ipAddress && device.port === searchDevice.port) {
        found = i;
        break;
      }
    }
    return found;
  }

  private isDefault(value: DeviceIndexModel) {
    return value.active;
  }

  private storeItem() {
    if (this.localStorageService.hasBrowserSupport()) {
      this.localStorageService.storeObject(this.itemName, this.deviceIndex);
    }
  }
}
