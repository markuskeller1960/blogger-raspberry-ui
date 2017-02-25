import { Component } from '@angular/core';

import {UtilityService} from '../service';

@Component({
  selector: 'app-device-selection',
  templateUrl: './html/app.device-selection.component.html',
  styleUrls: ['./styles/app.device-selection.component.scss']
})

export class DeviceSelectionComponent {

  private title = '';
  private subtitle = 'Bitte wähle das Raspberry PI, mit dem du dich verbinden willst:';

  constructor(private utilityService: UtilityService) {
      this.title = utilityService.getApplicationName();
  }

  getTitle(): string {
    return this.title;
  }

  getSubtitle(): string {
    return this.subtitle;
  }
}
