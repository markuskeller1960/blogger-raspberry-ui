import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-documentation',
  templateUrl: './html/app.application.component.html',
  styleUrls: ['./styles/app.application.component.scss']
})

export class ApplicationComponent implements OnInit {

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

