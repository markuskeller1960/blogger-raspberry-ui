export class DeviceIndexModel {

  public name: string;
  public ipAddress: string;
  public port: string;
  public active: boolean;


  constructor(name: string, ipAddress: string, port: string, active: boolean) {
    this.name = name;
    this.ipAddress = ipAddress;
    this.port = port;
    this.active = active;
  }
}
