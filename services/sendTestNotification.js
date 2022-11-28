var apn = require("apn");
const { v4: uuidv4 } = require('uuid');
var path = require('path');


module.exports.sendTestNotification = () => (
    new Promise((resolve, reject) => {
        try {
            const pathToP8File = path.join(appRoot, 'assets/AuthKey_62GR7M7CYC.p8' );
            const deviceToken = "796c917c540402b41d970a28f479a8a8b24ca7d44a9eb8d0210a730eea02df9f"

            const options = {
                token: {
                    key: pathToP8File,
                    keyId: '62GR7M7CYC',
                    teamId: 'B6QU7BA2E4'
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