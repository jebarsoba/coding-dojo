//This is a simple POST to an endpoint that expects msgpack in the request body...
var msgpack = require('msgpack-lite');
const axios = require('axios')

axios.post('http://localhost:8001/fulfillByKey', msgpack.encode(['meeting-room-bot', 'sap-cai']))
    .then((res) => {
        console.log(`statusCode: ${res.statusCode}`)
        console.log(res)
    })
    .catch((error) => {
        console.error(error)
    });