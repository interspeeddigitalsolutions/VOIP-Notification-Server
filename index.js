const express = require('express')
var path = require('path')
var cors = require('cors')
const { sendTestNotification } = require('./services/sendTestNotification');
const { exampleDeviceToken, exampleNotificationBody, exampleCallerName, exampleHandle } = require('./appConfig');


const app = express()
app.use(cors())

const port = 3000

app.get('/', (req, res) => {
    res.send('VOIP push test')
})

app.get('/send_test_notification', (req, res) => {
    const deviceToken = req.query.device_token || exampleDeviceToken;
    const notificationBody = req.query.body || exampleNotificationBody;
    const callerName = req.query.caller_name || exampleCallerName;
    const handle = req.query.handle || exampleHandle

    sendTestNotification(
        deviceToken,
        notificationBody,
        callerName,
        handle
    )
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            console.log(error);
            res.send("Server error. check console");
        })
});

app.listen(port, () => {
    console.log(`Server app listening on port ${port}`)
});