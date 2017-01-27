import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-misc',
  templateUrl: './html/app.help.misc.component.html',
  styleUrls: ['./styles/app.help.misc.component.scss']
})

export class HelpMiscComponent implements OnInit {

  private titel = '';
  private text = '';

  ngOnInit(): void {
    this.titel = 'Miscellaneous';
    this.text = 'Swisscom Object Orchestration Engine';
  }

  getTitel(): string {
    return this.titel;
  }

  getText(): string {
    return this.text;
  }
}
