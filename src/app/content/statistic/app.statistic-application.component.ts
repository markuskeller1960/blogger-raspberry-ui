import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic-application',
  templateUrl: './html/app.statistic-application.component.html',
  styleUrls: ['./styles/app.statistic-application.component.scss']
})

export class StatisticApplicationComponent implements OnInit {

  private titel = '';
  private text = '';

  ngOnInit(): void {
    this.titel = 'Application Statistic';
    this.text = 'Swisscom Object Orchestration Engine';
  }

  getTitel(): string {
    return this.titel;
  }

  getText(): string {
    return this.text;
  }
}
