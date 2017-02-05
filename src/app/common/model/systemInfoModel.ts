export class SystemInfoModel {

  private transactionInfo: string;
  private cpuTemperature: number;
  private totalDiskSpace: string;
  private usedDiskSpace: string;
  private freeDiskSpace: string;
  private usedDiskSpacePercentage: string;
  private totalRAM: number;
  private usedRAM: number;
  private freeRAM: number;

  getTransactionInfo(): string {
    return this.transactionInfo;
  }

  setTransactionInfo(value: string) {
    this.transactionInfo = value;
  }

  getCpuTemperature(): number {
    return this.cpuTemperature;
  }

  setCpuTemperature(value: number) {
    this.cpuTemperature = value;
  }

  getTotalDiskSpace(): string {
    return this.totalDiskSpace;
  }

  setTotalDiskSpace(value: string) {
    this.totalDiskSpace = value;
  }

  getUsedDiskSpace(): string {
    return this.usedDiskSpace;
  }

  setUsedDiskSpace(value: string) {
    this.usedDiskSpace = value;
  }

  getFreeDiskSpace(): string {
    return this.freeDiskSpace;
  }

  setFreeDiskSpace(value: string) {
    this.freeDiskSpace = value;
  }

  getUsedDiskSpacePercentage(): string {
    return this.usedDiskSpacePercentage;
  }

  setUsedDiskSpacePercentage(value: string) {
    this.usedDiskSpacePercentage = value;
  }

  getTotalRAM(): number {
    return this.totalRAM;
  }

  setTotalRAM(value: number) {
    this.totalRAM = value;
  }

  getUsedRAM(): number {
    return this.usedRAM;
  }

  setUsedRAM(value: number) {
    this.usedRAM = value;
  }

  getFreeRAM(): number {
    return this.freeRAM;
  }

  setFreeRAM(value: number) {
    this.freeRAM = value;
  }
}
