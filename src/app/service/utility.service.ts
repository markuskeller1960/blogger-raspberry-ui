import { Injectable } from '@angular/core';


@Injectable()
export class UtilityService {
  private applicationName = 'Rasperry PI Blogger';
  private applicationVersion = '1.0 beta 1';

  getApplicationName(): string {
    return this.applicationName;
  }

  getApplicationVersion(): string {
    return this.applicationVersion;
  }
}