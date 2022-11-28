const express = require('express')
var path = require('path')
var cors = require('cors')
const { sendTestNotification } = require('./services/sendTestNotification')

global.appRoot = path.resolve(__dirname);
const app = express()
app.use(cors())

const port = 3000

app.get('/', (req, res) => {
  res.send('VOIP push test')
})

app.get('/test', (req, res) => {
    sendTestNotification()
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            console.log(error);
            res.send("Server error. check console");
        })
})

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
});