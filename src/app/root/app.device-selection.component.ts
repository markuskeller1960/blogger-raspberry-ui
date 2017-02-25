import { Component } from '@angular/core';

@Component({
  selector: 'app-device-selection',
  templateUrl: './html/app.device-selection.component.html',
  styleUrls: ['./styles/app.device-selection.component.scss']
})

export class DeviceSelectionComponent {

  private title = 'Raspberry Blogger';
  private subtitle = 'Bitte wähle das Raspberry Pi, mit dem du dich verbinden willst';


  getTitle(): string {
    return this.title;
  }

  getSubtitle(): string {
    return this.subtitle;
  }
}
