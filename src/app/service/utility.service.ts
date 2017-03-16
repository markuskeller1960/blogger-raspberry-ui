import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {
  private applicationName = 'Raspberry Lemon';
  private applicationVersion = '1.0 beta 1';

  private restServiceURL = 'http://192.168.6.143:8080';
  private restSystemInfoURI = '/system-info/rest/system/info/';

  getApplicationName(): string {
    return this.applicationName;
  }

  getApplicationVersion(): string {
    return this.applicationVersion;
  }

  getSystemInfoServiceURL(): string {
    return this.restServiceURL + this.restSystemInfoURI;
  }

  getRestSystemInforURI(): string {
    return this.restSystemInfoURI;
  }
}
