import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import { SystemService } from '../service';
import { SystemInfoModel } from '../common/model/systemInfoModel';

@Component({
  selector: 'app-content',
  templateUrl: './app.welcome.component.html',
  styleUrls: ['./app.welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private systemInfo: SystemInfoModel;

  constructor(private systemService: SystemService) {}

  ngOnInit(): void {
    this.subscription = this.systemService.getPollingSystemInfo().subscribe(() => this.systemInfo);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private handleError() {
    console.log('Error while reading system data');
  }
}

