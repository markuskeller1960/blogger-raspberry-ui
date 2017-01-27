import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-documentation',
  templateUrl: './html/app.help.documentation.component.html',
  styleUrls: ['./styles/app.help.documentation.component.scss']
})

export class HelpDocumentationComponent implements OnInit {

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
