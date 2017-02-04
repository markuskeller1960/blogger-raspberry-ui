import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-dashboard',
  templateUrl: './html/app.application-dashboard.component.html',
  styleUrls: ['./styles/app.application-dashboard.component.scss']
})

export class ApplicationDashboardComponent implements OnInit {

  private titel = '';
  private text = '';

  ngOnInit(): void {
    this.titel = 'Documentation';
    this.text = 'Swisscom Object Orchestration Engine';
  }

  getTitel(): string {
    return this.titel;
  }

  getText(): string {
    return this.text;
  }
}
