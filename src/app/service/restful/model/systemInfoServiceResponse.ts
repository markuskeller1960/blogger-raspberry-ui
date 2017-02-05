import { SystemInfoModel } from '../../../common/model/systemInfoModel';

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
    console.log('Value : ' + this.developerMessage);
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
