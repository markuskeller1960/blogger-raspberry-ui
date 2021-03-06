import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/mergeMap';

import { UtilityService } from '../';
import { SystemInfoServiceResponse } from './';
import { SystemInfoModel, DeviceIndexModel } from '../../common/';

@Injectable()
export class SystemService {

  private sysinfo: SystemInfoModel;
  constructor (
    private http: Http,
    private utilityService: UtilityService) {}

  getStoredSysteminfo(): SystemInfoModel {
    return this.sysinfo;
  }

  getRealTimeSystemInfo(): Observable<SystemInfoModel> {
    return this.getSystemInfo();
  }

  getPollingSystemInfo(): Observable<SystemInfoModel> {
    return Observable
      .interval(120000)
      .startWith(0)
      .flatMap(() => this.getSystemInfo())
      .catch(this.handleError);
  }

  testConnection(device: DeviceIndexModel): Observable<any> {
    const url = 'http://' + device.ipAddress + ':' + device.port + this.utilityService.getRestSystemInforURI();
    console.log('Connecting to ' + device.ipAddress + ' ...');
    return this.http.get(url)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private getSystemInfo(): Observable<SystemInfoModel> {
    return this.http.get(this.utilityService.getSystemInfoServiceURL())
      .map(this.parseSystemInfo)
      .catch(this.handleError);
  }

  private parseSystemInfo(res: Response): SystemInfoModel {
    const info = new SystemInfoServiceResponse(res.json());
    this.sysinfo = info.getInfo();
    return new SystemInfoModel();
  }

  private handleError(error: any): Promise<any> {
    console.log('ERROR :: ' + error);
    return Promise.reject(error.message || error);
  }
}
