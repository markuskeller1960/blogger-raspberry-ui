import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-documentation',
  templateUrl: './html/app.help.exceptions.component.html',
  styleUrls: ['./styles/app.help.exceptions.component.scss']
})

export class HelpExceptionsComponent implements OnInit {

  private titel = '';
  private text = '';

  ngOnInit(): void {
    this.titel = 'Exception Handling';
    this.text = 'Swisscom Object Orchestration Engine';
  }

  getTitel(): string {
    return this.titel;
  }

  getText(): string {
    return this.text;
  }
}
