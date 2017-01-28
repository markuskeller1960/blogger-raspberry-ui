import { Component, OnInit } from '@angular/core';

import { ContentCardHeaderModel } from '../common/card/content/model/ContentCardHeaderModel';

@Component({
  selector: 'app-content',
  templateUrl: './app.welcome.component.html',
  styleUrls: ['./app.welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  private data: ContentCardHeaderModel;

  ngOnInit(): void {
    this.data = new ContentCardHeaderModel('Willkommen', 'Rapberry PI Blogger ist eine Anwendung für die Anzeige von Daten aus deinem Rasperry PI.', '/assets/images/content_header_welcome.png');
  }

  getHeaderData(): ContentCardHeaderModel {
    return this.data;
  }
}

