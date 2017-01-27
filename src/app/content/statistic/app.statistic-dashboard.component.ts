import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic-dashboard',
  templateUrl: './html/app.statistic-dashboard.component.html',
  styleUrls: ['./styles/app.statistic-dashboard.component.scss']
})

export class StatisticDashboardComponent implements OnInit {

  private titel = '';
  private text = '';

  ngOnInit(): void {
    this.titel = 'Statistic Dashboard';
    this.text = 'Swisscom Object Orchestration Engine';
  }

  getTitel(): string {
    return this.titel;
  }

  getText(): string {
    return this.text;
  }
}
