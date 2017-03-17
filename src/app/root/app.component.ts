import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {ApplicationService} from '../service/application.service';

@Component({
  selector: 'app-root',
  templateUrl: './html/app.component.html',
  styleUrls: ['./styles/app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

  private connectedSubscription: Subscription;
  private connected: boolean;

  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.connectedSubscription = this.applicationService.isConnected().subscribe(connected => { this.connected = connected; });
  }

  ngOnDestroy() {
    this.connectedSubscription.unsubscribe();
  }

  isConnected(): boolean {
    return this.connected;
  }
}
