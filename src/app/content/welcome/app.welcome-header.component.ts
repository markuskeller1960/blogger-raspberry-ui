import { Component} from '@angular/core';

@Component({
  selector: 'app-welcome-header',
  templateUrl: 'html/app.welcome-header.component.html',
  styleUrls: ['styles/app.welcome-header.component.scss']
})

export class WelcomeHeaderComponent {

  private ico_close = 'expand_less';
  private ico_open = 'expand_more';

  isCardBodyVisible = true;
  cardBodyIcon = 'ico_open';

  toggleCardBody() {
    this.isCardBodyVisible = !this.isCardBodyVisible;
    this.cardBodyIcon = this.isCardBodyVisible ? this.ico_close : this.ico_open;
  }
}
