import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome-header',
  templateUrl: 'html/app.welcome-header.component.html',
  styleUrls: ['styles/app.welcome-header.component.scss']
})

export class WelcomeHeaderComponent implements OnInit {

  msgTitle: string;

  ngOnInit() {
    this.msgTitle = 'Willkommen';
  }
}
