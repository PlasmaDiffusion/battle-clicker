import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

/**
 * Handles asking to use cookies and mentions autosaves other components would be doing.
 * Also lets user delete cookies if they press delete enough times.
 */
@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.scss',
})
export class CookiesComponent {
  cookiesEnabled: boolean;
  justSaved: boolean;
  confirmingDelete: number;

  constructor(private cookieService: CookieService) {
    this.cookiesEnabled =
      cookieService.get('cookiesAccepted') === 'true' ? true : false;
    this.justSaved = false;
    this.confirmingDelete = 0;

    this.showAutoSaveText();
  }

  accept() {
    this.cookieService.set('cookiesAccepted', 'true');
    this.cookiesEnabled = true;
  }

  deleteCookies() {
    if (this.confirmingDelete == 9) {
      this.cookieService.delete('cookiesAccepted');
      this.cookieService.delete('Gold');
      this.cookieService.delete('Buildings');
      this.cookieService.delete('currentEnemyIndex');
      window.location.reload();
    } else {
      this.confirmingDelete++;
    }
  }

  cancelDelete() {
    this.confirmingDelete = 0;
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
