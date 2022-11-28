var apn = require("apn");
const { v4: uuidv4 } = require('uuid');
const { keyFilePath, keyId, teamId } = require("../appConfig");


module.exports.sendTestNotification = (deviceToken, notificationBody, callerName, handle) => (
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

            notification.body = notificationBody;
            notification.topic = "com.app-kotha.app.voip";   // Make sure to append .voip here!
            notification.payload = {
                "aps": { "content-available": 1 },
                "handle": handle,
                "callerName": callerName,
                "uuid": uuidv4()
            };

            apnProvider.send(notification, deviceToken).then((response) => {
                resolve({
                    payload: {
                        ...notification.payload,
                        body: notification.body,
                    },
                    response: response
                });
            });
        } catch (error) {
            console.log(error);
            reject
        }
    })
)