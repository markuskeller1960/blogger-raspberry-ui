export class DeviceIndexModel {

  private name: string;
  private ipAddress: string;
  private port: string;
  private active: boolean;


  constructor(name: string, ipAddress: string, port: string, active: boolean) {
    this.name = name;
    this.ipAddress = ipAddress;
    this.port = port;
    this.active = active;
  }

  setName(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setIPAddress(ipAddress: string) {
    this.ipAddress = ipAddress;
  }

  getIPAddress(): string {
    return this.ipAddress;
  }

  getPort(): string {
    return this.port;
  }

  setPort(value: string) {
    this.port = value;
  }

  isActive(): boolean {
    return this.active;
  }

  setActive(value: boolean) {
    this.active = value;
  }
}
