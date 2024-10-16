const { contextBridge, ipcRenderer } = require('electron/renderer');

contextBridge.exposeInMainWorld('electronAPI', {
  toogleDevTool: () => ipcRenderer.send('toogle-dev-tool'),
  goBack: () => ipcRenderer.send('go-back'),
  goForward: () => ipcRenderer.send('go-forward'),
  refresh: () => ipcRenderer.send('refresh'),
  canGoForward: () => ipcRenderer.invoke('can-go-forward'),
  canGoBack: () => ipcRenderer.invoke('can-go-back'),
  goToPage: (url) => ipcRenderer.invoke('go-to-page', url),
  currentUrl: () => ipcRenderer.invoke('current-url'),
  onUpdateUrl: (callback) => ipcRenderer.on('update-url', (_event, url) => callback(url)),
  updateUrl: (url) => ipcRenderer.send('update-url', url),
  openIncognitoWindow: () => ipcRenderer.send('open-incognito-window'),
  openCognitoWindow: () => ipcRenderer.send('open-cognito-window')
});