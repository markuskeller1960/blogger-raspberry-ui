import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './app.welcome.component.html',
  styleUrls: ['./app.welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  private titel = '';
  private text = '';

  ngOnInit(): void {
    this.titel = 'Welcome';
    this.text = 'Raspberry PI Administration';
  }

  getTitel(): string {
    return this.titel;
  }

  getText(): string {
    return this.text;
  }
}

