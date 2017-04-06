const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

let win;
app.on('ready', function () {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600
    });

    win.loadURL(`file://${__dirname}/index.html`);

});