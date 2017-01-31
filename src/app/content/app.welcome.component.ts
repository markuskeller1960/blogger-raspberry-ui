import { Component, OnInit } from '@angular/core';

import { UtilityService } from '../service';
import { ContentCardHeaderModel } from '../common/card/content/model/ContentCardHeaderModel';

@Component({
  selector: 'app-content',
  templateUrl: './app.welcome.component.html',
  styleUrls: ['./app.welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  private data: ContentCardHeaderModel;

  constructor(private utilityService: UtilityService) {}

  ngOnInit(): void {
    const subtiltle = this.utilityService.getApplicationName() + ' ist eine Anwendung für die Anzeige von Daten aus deinem Rasperry PI.';
    this.data = new ContentCardHeaderModel('Willkommen', subtiltle, '/assets/images/content_header_welcome.png');
  }

  getHeaderData(): ContentCardHeaderModel {
    return this.data;
  }
}

