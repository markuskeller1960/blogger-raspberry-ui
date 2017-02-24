export class DeviceService {

  private isDevice = false;


  hasDevice(): boolean {
    return this.isDevice;
  }

  setHasDevice(value: boolean) {
    this.isDevice = value;
  }
}
