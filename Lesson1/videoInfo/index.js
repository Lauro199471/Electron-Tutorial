const electron = require('electron');

const { app, BrowserWindow } = electron;

app.on('ready', () => {
    console.log('App is now ready');
    const mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/index.html`);

});

$('.custom-file-input').on('change',function(){
    var fileName = document.getElementById("exampleInputFile").files[0].name;
    $(this).next('.form-control-file').addClass("selected").html(fileName);
  })