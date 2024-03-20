import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-ask-to-use-cookies',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ask-to-use-cookies.component.html',
  styleUrl: './ask-to-use-cookies.component.scss',
})
export class AskToUseCookiesComponent {
  cookiesEnabled: boolean;

  constructor(private cookieService: CookieService) {
    this.cookiesEnabled =
      cookieService.get('cookiesAccepted') === 'true' ? true : false;
  }

  accept() {
    this.cookieService.set('cookiesAccepted', 'true');
  }
}
