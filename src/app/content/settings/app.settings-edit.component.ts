import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-edit',
  templateUrl: './html/app.settings-edit.component.html',
  styleUrls: ['./styles/app.settings-edit.component.scss']
})

export class SettingsEditComponent implements OnInit {

  private titel = '';
  private text = '';

  ngOnInit(): void {
    this.titel = 'Edit Settings';
    this.text = 'Swisscom Object Orchestration Engine';
  }

  getTitel(): string {
    return this.titel;
  }

  getText(): string {
    return this.text;
  }
}
