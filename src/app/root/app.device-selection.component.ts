import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UtilityService } from '../service';
import { DeviceIndexModel } from '../common';

@Component({
  selector: 'app-device-selection',
  templateUrl: './html/app.device-selection.component.html',
  styleUrls: ['./styles/app.device-selection.component.scss']
})

export class DeviceSelectionComponent implements OnInit {

  private title: string;
  private subtitle: string;

  constructor(private utilityService: UtilityService, private router: Router) {}

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

  goToMainView(ddevice: DeviceIndexModel) {
    this.router.navigate(['/main']);
  }
}
