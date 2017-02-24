import { Component, OnInit } from '@angular/core';

import {DeviceService} from '../service/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './html/app.component.html',
  styleUrls: ['./styles/app.component.scss']
})

export class AppComponent implements OnInit {

  private device = false;

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.device = this.deviceService.hasDefaultDevice();
    console.log('Default Device ' + this.device);
  }

  hasDevice(): boolean {
    return this.device;
  }
}
