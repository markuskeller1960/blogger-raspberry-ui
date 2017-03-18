import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {ApplicationService} from '../service/application.service';

@Injectable()
export class MainRouterGuard implements CanActivate, CanActivateChild {

  private connectedSubscription: Subscription;
  private connected: boolean;

  constructor(private applicationService: ApplicationService) {
    this.connectedSubscription = this.applicationService.isConnected().subscribe(connected => { this.connected = connected; });
  }

  canActivate() {
    return this.connected;
  }

  canActivateChild() {
    return this.canActivate();
  }
}
