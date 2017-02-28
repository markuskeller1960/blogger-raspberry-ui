import { SystemInfoModel } from '../../../common/model/system-info.model';

export class SystemInfoServiceResponse {

  private success: boolean;
  private errorMessage: string;
  private code: string;
  private developerMessage: string;
  private info: SystemInfoModel;

  constructor(data: any) {
    this.success = data.success;
    this.code = data.code;
    this.developerMessage = data.developerMessage;
    this.info = new SystemInfoModel();
    if (data.data) {
      const values = data.data;
      this.info.setTransactionInfo(values.transactionInfo);
      this.info.setCpuTemperature(values.cpuTemperature);
      this.info.setTotalDiskSpace(values.totalDiskSpace);
      this.info.setUsedDiskSpace(values.usedDiskSpace);
      this.info.setFreeDiskSpace(values.freeDiskSpace);
      this.info.setUsedDiskSpacePercentage(values.usedDiskSpacePercentage);
      this.info.setTotalRAM(values.totalRAM);
      this.info.setUsedRAM(values.usedRAM);
      this.info.setFreeRAM(values.freeRAM);
      this.info.setDate(new Date(
        values.date.year,
        values.date.monthValue,
        values.date.dayOfMonth,
        values.date.hour,
        values.date.minute,
        values.date.second
      ));

    }
  }

  getSuccess(): boolean {
    return this.success;
  }

  getErrorMessage(): string {
    return this.errorMessage;
  }

  getCode(): string {
    return this.code;
  }

  getDeveloperMessage(): string {
    return this.developerMessage;
  }

  getInfo(): SystemInfoModel {
    return this.info;
  }
}
