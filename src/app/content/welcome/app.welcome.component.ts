import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import { SystemService } from '../../service';
import { SystemInfoModel } from '../../common/model/system-info.model';

@Component({
  selector: 'app-welcome',
  templateUrl: 'html/app.welcome.component.html',
  styleUrls: ['styles/app.welcome.component.scss']
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

