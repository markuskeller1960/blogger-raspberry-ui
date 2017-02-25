import { Component, Input } from '@angular/core';

import { DeviceIndexModel } from '../../';

@Component({
  selector: 'app-device-index-item',
  templateUrl: 'html/app.device-index-item.component.html',
  styleUrls: ['styles/app.device-index-item.component.scss']
})

export class DeviceIndexItemComponent {

  private item: DeviceIndexModel;

  @Input() set deviceItem(item: DeviceIndexModel) {
    this.item = item;
  }

  getDevice(): DeviceIndexModel {
    return this.item;
  }
}

