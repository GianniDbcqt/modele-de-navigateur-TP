import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  url = 'https://amiens.unilasalle.fr';
  canGoBack = false;
  canGoForward = false;

// @ts-ignore
  electronAPI = window.electronAPI;

  updateUrl(newUrl: string){
    this.url= newUrl;
  }

  toogleDevTool() {
    this.electronAPI.toogleDevTool();
  }

  goBack() {
    this.electronAPI.goBack();
    this.updateHistory();
  }

  goForward() {
    this.electronAPI.goForward();
    this.updateHistory();
  }

  refresh() {
    this.electronAPI.refresh();
  }

 /* goToPage(url: string) {
    this.electronAPI.goToPage(url)
      .then(() => this.updateHistory());
  }*/


  goToPage(url: string, incognito = false) {
    this.electronAPI.goToPage(url, incognito)
      .then(() => {
      this.electronAPI.updateUrl(url);
      this.updateHistory();
    });
}

  setToCurrentUrl() {
    this.electronAPI.currentUrl()
      .then((url :string) => {
        this.url = url;
      });
  }

  updateHistory() {
    this.setToCurrentUrl();

    this.electronAPI.canGoBack()
      .then((canGoBack : boolean) => this.canGoBack = canGoBack);

    this.electronAPI.canGoForward()
      .then((canGoForward : boolean) => this.canGoForward = canGoForward);
  }

  constructor() {
    this.electronAPI.onUpdateUrl((url: string) => {
      this.url = url;
    });
  }

  addValues() {
    const students = [];
    for (let i = 0; i < 10; i++) {
      let student = {
        "name": "student"+i,
        "age": i+20
      }
      students.push(student);
    }
    return students;
  }

  enableIncognitoMode() {
    localStorage.setItem("students", JSON.stringify(this.addValues()));
    console.log('Avant', localStorage, sessionStorage);
    localStorage.clear();
    sessionStorage.clear();
    console.log('Apres', localStorage, sessionStorage);
    this.clearCookies();
  }

private clearCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
}

}