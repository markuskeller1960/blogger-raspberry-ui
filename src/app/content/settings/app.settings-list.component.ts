import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-list',
  templateUrl: './html/app.settings-list.component.html',
  styleUrls: ['./styles/app.settings-list.component.scss']
})

export class SettingsListComponent implements OnInit {

  private titel = '';
  private text = '';

  ngOnInit(): void {
    this.titel = 'List Settings';
    this.text = 'Swisscom Object Orchestration Engine';
  }

  getTitel(): string {
    return this.titel;
  }

  getText(): string {
    return this.text;
  }
}
