
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hello-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './hello-button.component.html',
  styleUrl: './hello-button.component.css'
})
export class HelloButtonComponent {
    // @ts-ignore
  private readonly ipcRenderer = window.electronAPI; 
  homePage: string = 'https://amiens.unilasalle.fr'; 

  goToHomePage() {
    this.ipcRenderer.goToPage(this.homePage); 
  }
}