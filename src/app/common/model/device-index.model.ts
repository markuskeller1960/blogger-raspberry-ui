export class DeviceIndexModel {

  name: string;
  ipAddress: string;
  port: string;
  active: boolean;


  constructor(name: string, ipAddress: string, port: string, active: boolean) {
    this.name = name;
    this.ipAddress = ipAddress;
    this.port = port;
    this.active = active;
  }
}
