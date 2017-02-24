import { Component, OnInit } from '@angular/core';

import {DeviceService} from '../service/device.service';
import {LocalStorageService} from '../service/localStorage.service';



@Component({
  selector: 'app-root',
  templateUrl: './html/app.component.html',
  styleUrls: ['./styles/app.component.scss']
})

export class AppComponent implements OnInit {

  private device = false;

  constructor(private deviceService: DeviceService, private storageService: LocalStorageService) {}

  ngOnInit(): void {
    console.log('XXXXXXXXXXXXXXXXXXXXX :: ' + this.storageService.hasBrowserSupport());
  }

  hasDevice(): boolean {
    return this.device;
  }
}
