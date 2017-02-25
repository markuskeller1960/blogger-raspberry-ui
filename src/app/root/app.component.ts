import { Component, OnInit } from '@angular/core';

import {DeviceService} from '../service/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './html/app.component.html',
  styleUrls: ['./styles/app.component.scss']
})

export class AppComponent implements OnInit {

  private device = true;

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.device = this.deviceService.hasDefaultDevice();
  }

  hasDevice(): boolean {
    return this.device;
  }
}
