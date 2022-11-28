
# VOIP Notification Test Server

### Note
 - Find all variables in `appConfig.js` file.
 - P8 key file is located in `/assets` folder

### How to send notification?
Run the server
`npm run dev`
server will start at port 3000.

To send a test VOIP push notification make a GET request to
http://localhost:3000/send_test_notification