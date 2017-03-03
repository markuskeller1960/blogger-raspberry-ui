import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { DeviceIndexModel } from '../../';
import { DeviceService, SystemService } from '../../../service';

@Component({
  selector: 'app-add-device-index',
  templateUrl: 'html/app.add-device-index.component.html',
  styleUrls: ['styles/app.add-device-index.component.scss']
})

export class AddDeviceIndexComponent implements OnInit {

  btnCancel: string;
  btnTest: string;
  btnConnect: string;
  lblIP: string;
  lblPort: string;
  lblName: string;
  formTitle: string;
  device: DeviceIndexModel;

  @Output() onCancelButtonClicked: EventEmitter<any> = new EventEmitter();

  constructor(private deviceService: DeviceService, private systemService: SystemService) {}

  ngOnInit(): void {
    this.formTitle = 'Raspberry hinzufügen';
    this.device = new DeviceIndexModel('Mein Raspberry PI', '127.0.0.1', '8080', false);
    this.btnConnect = 'Verbinden';
    this.btnCancel = 'Abbrechen';
    this.btnTest = 'Verbindung testen';
    this.lblIP = 'IP-Adresse';
    this.lblPort = 'Port';
    this.lblName = 'Name';
  }

  cancel() {
    this.device = new DeviceIndexModel('Mein Raspberry PI', '127.0.0.1', '8080', false);
    this.onCancelButtonClicked.emit();
  }

  test() {
    this.systemService.testConnection(this.device);
  }
}
