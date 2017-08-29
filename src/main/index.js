import { app, BrowserWindow, ipcMain } from 'electron'



/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let refereeWindow, playerWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  refereeWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000
  })

  refereeWindow.loadURL(winURL+'#referee')

  refereeWindow.on('closed', () => {
    refereeWindow = null
  })

  playerWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000
  })

  playerWindow.loadURL(winURL+'#player')

  playerWindow.on('closed', () => {
    playerWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (refereeindow === null || playerWindow==null) {
    createWindow()
  }
})

ipcMain.on('mainMatch', (event, data)=>{
  playerWindow.webContents.send('playerMatch', data)
})