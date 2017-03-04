import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { DeviceIndexModel } from '../../';
import { DeviceService, SystemService } from '../../../service';

@Component({
  selector: 'app-add-device-index',
  templateUrl: 'html/app.add-device-index.component.html',
  styleUrls: ['styles/app.add-device-index.component.scss']
})

export class AddDeviceIndexComponent implements OnInit {

  formTitle: string;
  btnCancel: string;
  btnTest: string;
  btnConnect: string;
  lblIP: string;
  lblPort: string;
  lblName: string;

  testing = false;
  testingError = false;
  msgTesting: string;
  msgTestingFailed: string;

  device: DeviceIndexModel;

  @Output() onCancelButtonClicked: EventEmitter<any> = new EventEmitter();
  @Output() onNewDeviceAdded: EventEmitter<any> = new EventEmitter();

  constructor(
    private deviceService: DeviceService, private systemService: SystemService) {}

  ngOnInit(): void {
    this.formTitle = 'Raspberry hinzufügen';
    this.device = new DeviceIndexModel('Mein Raspberry PI', '192.168.6.143', '8080', false);
    this.btnConnect = 'Verbinden';
    this.btnCancel = 'Abbrechen';
    this.btnTest = 'Verbindung testen';
    this.lblIP = 'IP-Adresse';
    this.lblPort = 'Port';
    this.lblName = 'Name';

    this.msgTesting = 'Teste Verbindung zum Gerät an Adresse ';
    this.msgTestingFailed = 'Das angegebene Gerät konnte nicht gefunden werden, bitte überprüfe deine Angaben im Fomular. Ist Tomcat auf dem Raspberry installiert und gestartet?';
  }

  cancel() {
    this.device = new DeviceIndexModel('Mein Raspberry PI', '192.168.6.143', '8080', false);
    this.onCancelButtonClicked.emit();
  }

  test() {
    this.msgTesting = `${this.msgTesting} ${this.device.ipAddress}`;
    this.testing = true;
    this.testingError = false;
    this.systemService.testConnection(this.device).subscribe( () => this.deviceTestSuccess(), e => this.deviceTestError(e) );
  }

  private deviceTestSuccess() {
    this.testing = false;
    this.testingError = false;
    this.deviceService.saveDevice(this.device);
    this.onNewDeviceAdded.emit();
  }

  private deviceTestError(error: any) {
    this.testing = false;
    this.testingError = true;
  }
}
