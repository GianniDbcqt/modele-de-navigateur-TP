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
    // Logique pour ouvrir une nouvelle fenêtre en mode normal
    this.browserService.goToPage('https://amiens.unilasalle.fr'); // Ou la page par défaut
  }

  enableIncognitoMode() {
    this.browserService.enableIncognitoMode();
    this.browserService.goToPage('https://amiens.unilasalle.fr'); // Ou une nouvelle page en mode incognito
  }
}