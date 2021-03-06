const electron = require('electron');
const {app, BrowserWindow , Menu} = electron;

let mainWindow;

const menuTemplate = [
    {
        label : 'File',
        submenu: [
            {label: 'New Todo'},
            {label: 'Quit',
             accelerator:process.platform==='darwin'?'Command+Q':'Ctrl+Q', 
             click(){app.quit();}
            }
        ]
    }
];

if(process.platform == 'darwin'){
    menuTemplate.unshift({});
}

app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

