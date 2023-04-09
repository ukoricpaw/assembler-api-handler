const { exec } = require('child_process');
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
let cors = require("cors"); 
app.use(cors());



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let jsonFile;

app.post('/get-url', (req, res) => {
  const { url } = req.body;
  exec(`search.bat ${url}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send('Ошибка выполнения программы');
    }

    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    res.setHeader('Content-Disposition', 'attachment; filename=response.txt');
    res.setHeader('Content-Type', 'text/plain');
    res.send('Success');

    setTimeout(() => {
      fs.readFile('response.txt', 'utf8', (err, data) => {
        if (err) console.log(err);
        jsonFile = data;
        // console.log(data);
      });
    }, 1000)

  });
});

app.get('/getJson', (req, res) => {
  res.send(jsonFile);
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});