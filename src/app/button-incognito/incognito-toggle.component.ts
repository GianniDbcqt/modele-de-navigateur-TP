import { Component } from '@angular/core';
import { BrowserService } from '../browser.service';

@Component({
  selector: 'app-incognito-toggle',
  standalone: true,
  template: `
    <button (click)="enableNormalMode()">Mode normal</button>
    <button (click)="enableIncognitoMode()">Mode incognito</button>
  `,
})
export class IncognitoToggleComponent {
  constructor(private browserService: BrowserService) {}

  enableNormalMode() {
    this.browserService.NormalMode();
    this.browserService.goToPage('https://amiens.unilasalle.fr');
  }

  enableIncognitoMode() {
    this.browserService.enableIncognitoMode();
    this.browserService.goToPage('https://amiens.unilasalle.fr');
  }
}