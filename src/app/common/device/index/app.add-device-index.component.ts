import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { DeviceIndexModel } from '../../';
import {DeviceIndexComponent} from './app.device-index.component';

@Component({
  selector: 'app-add-device-index',
  templateUrl: 'html/app.add-device-index.component.html',
  styleUrls: ['styles/app.add-device-index.component.scss']
})

export class AddDeviceIndexComponent implements OnInit{

  private device: DeviceIndexModel;

  @Output() onCancelButtonClicked: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.device = new DeviceIndexModel('', '', '80', false);
  }

  cancel() {
    this.device = new DeviceIndexModel('', '', '80', false);
    this.onCancelButtonClicked.emit();
  }
}
