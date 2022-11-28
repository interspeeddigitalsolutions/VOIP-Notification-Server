
# VOIP Notification Test Server

### Note:
 - Find all variables in `appConfig.js` file.
 - P8 key file is located in `/assets` folder

### How to send notification?
Run the server
`npm run dev`
server will start at port 3000.

To send a test VOIP push notification make a GET request to /send_test_notification route with the following query parameters:

`device_token` `caller_name` `body` `handle`

Example:

http://localhost:3000/send_test_notification?device_token=796c917c540402b41d970a28f479a8a8b24ca7d44a9eb8d0210a730eea02df9f&caller_name=Yousuf&body=Bangladesh&handle=22222222

*NOTE: If any query parameter is missing, app will use example values from appConfig.js file*
