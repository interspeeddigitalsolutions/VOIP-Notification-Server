var apn = require("apn");
const { v4: uuidv4 } = require('uuid');
const { deviceToken, keyFilePath, keyId, teamId } = require("../appConfig");


module.exports.sendTestNotification = () => (
    new Promise((resolve, reject) => {
        try {
            const options = {
                token: {
                    key: keyFilePath,
                    keyId: keyId,
                    teamId: teamId
                },
                production: false
            };
            var apnProvider = new apn.Provider(options);

            // Sending the voip notification
            let notification = new apn.Notification();

            notification.body = "Hello there!";
            notification.topic = "com.app-kotha.app.voip";   // Make sure to append .voip here!
            notification.payload = {
                "aps": { "content-available": 1 },
                "handle": "1111111",
                "callerName": "Yousuf Basir",
                "uuid": uuidv4()
            };

            apnProvider.send(notification, deviceToken).then((response) => {
                resolve(response);
            });
        } catch (error) {
            console.log(error);
            reject
        }
    })
)