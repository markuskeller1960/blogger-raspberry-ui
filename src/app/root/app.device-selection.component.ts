import { Component, OnInit } from '@angular/core';

import { UtilityService, ApplicationService } from '../service';
import { DeviceIndexModel } from '../common';

@Component({
  selector: 'app-device-selection',
  templateUrl: './html/app.device-selection.component.html',
  styleUrls: ['./styles/app.device-selection.component.scss']
})

export class DeviceSelectionComponent implements OnInit {

  private title: string;
  private subtitle: string;

  constructor(private utilityService: UtilityService, private applicationService: ApplicationService) {}

  ngOnInit() {
    this.title = this.utilityService.getApplicationName();
    this.subtitle  = 'Bitte wähle das Raspberry PI, mit dem du dich verbinden willst:';
  }

  getTitle(): string {
    return this.title;
  }

  getSubtitle(): string {
    return this.subtitle;
  }

  connectToDevice(device: DeviceIndexModel) {
    this.applicationService.setConnectedDevice(device);
  }
}
