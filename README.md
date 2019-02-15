# InGenius CU Hacking Challenge

## Amazon Connect Streams
Integratre the amazon connect streaming api

The api can be found here [here](https://github.com/aws/amazon-connect-streams)

## Example code

To run the server put in `npm start` into your terminal

It will run a server on https://localhost:8080

If you want to host your hack at a different address you will need to let us know so we can whitelist it. If you don't amazon connect will reject your address.

The number to call will be 1-506-906-8261 ext [groupNumber]

All hosts connecting to the amazon instance have to be on https.

If you need to generate your own cert you can use openssl with the following command `openssl req -nodes -new -x509 -keyout server.key -out server.cert`
