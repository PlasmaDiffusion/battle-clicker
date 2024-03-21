import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

//Handles asking to use cookies and mentions autosaves other components would be doing.
@Component({
  selector: 'app-ask-to-use-cookies',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ask-to-use-cookies.component.html',
  styleUrl: './ask-to-use-cookies.component.scss',
})
export class AskToUseCookiesComponent {
  cookiesEnabled: boolean;
  justSaved: boolean;

  constructor(private cookieService: CookieService) {
    this.cookiesEnabled =
      cookieService.get('cookiesAccepted') === 'true' ? true : false;
    this.justSaved = false;
    this.showAutoSaveText();
  }

  accept() {
    this.cookieService.set('cookiesAccepted', 'true');
  }

  //Other components will autosave every minute, so put feedback of it happening here.
  showAutoSaveText() {
    setInterval(async () => {
      this.justSaved = true;
      setTimeout(() => {
        this.justSaved = false;
      }, 6000);
    }, 60000);
  }
}
