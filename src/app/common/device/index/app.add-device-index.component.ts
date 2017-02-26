import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { DeviceIndexModel } from '../../';
import { DeviceService, SystemService } from '../../../service';

@Component({
  selector: 'app-add-device-index',
  templateUrl: 'html/app.add-device-index.component.html',
  styleUrls: ['styles/app.add-device-index.component.scss']
})

export class AddDeviceIndexComponent implements OnInit {

  public device: DeviceIndexModel;

  constructor(private deviceService: DeviceService, private systemService: SystemService) {}

  @Output() onCancelButtonClicked: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.device = new DeviceIndexModel('Mein Raspberry PI', '127.0.0.1', '8080', false);
  }

  cancel() {
    this.device = new DeviceIndexModel('Mein Raspberry PI', '127.0.0.1', '8080', false);
    this.onCancelButtonClicked.emit();
  }

  test() {
    console.log('name :: ' + this.device.name);
    console.log('ip :: ' + this.device.ipAddress);
    console.log('port :: ' + this.device.port);
  }
}
