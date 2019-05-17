//This is a simple POST to an endpoint that expects msgpack in the request body...
var msgpack = require('msgpack-lite');
const axios = require('axios')

const reqBody = {
    "nlp": {
       "uuid": "fb41b51b-d130-405d-977a-2741598ed554",
       "intents": [
          {
             "slug": "fav_song",
             "confidence": 0.99,
             "description": null
          }
       ],
       "entities": {
          "songs": [
             {
                "value": "bora bora bora",
                "raw": "bora bora bora",
                "confidence": 0.72,
                "country-code": "de"
             }
          ]
       },
       "language": "de",
       "processing_language": "de",
       "version": "1903.6.2",
       "timestamp": "2019-05-14T16:03:49.967055+00:00",
       "status": 200,
       "source": "mein song ist bora bora bora",
       "act": "assert",
       "type": null,
       "sentiment": "negative"
    },
    "qna": {},
    "messages": [
       {
          "type": "text",
          "content": "Dein Song ist: ",
          "markdown": null,
          "delay": null
       }
    ],
    "conversation": {
       "id": "test-1557849811063",
       "language": "de",
       "memory": {},
       "skill": "default",
       "skill_occurences": 1
    },
    "logs": {
       "input": "mein song ist bora bora bora",
       "logs": [
          {
             "level": "info",
             "code": "I_SKILL_TRIGGERED",
             "data": {
                "skill_id": "6893235a-c2b4-45a5-9fef-46dfb6cfa8d1",
                "reason": "TRIGGERS_OK",
                "message": "skill default has been triggered"
             }
          },
          {
             "level": "info",
             "code": "I_REQUIREMENTS_OK",
             "data": {
                "skill_id": "6893235a-c2b4-45a5-9fef-46dfb6cfa8d1",
                "message": "requirements of skill default validated, executing actions"
             }
          },
          {
             "level": "info",
             "code": "I_EXECUTE_ACTION",
             "data": {
                "type": "message",
                "value": {
                   "type": "text",
                   "content": "Dein Song ist: ",
                   "markdown": null,
                   "delay": null
                }
             }
          }
       ]
    },
    "hasDelay": true,
    "hasNextMessage": false
 };

axios.post('http://localhost:8001/fulfillByKey', msgpack.encode(['meeting-room-bot', 'sap-cai', reqBody]))
    .then((res) => {
        console.log(`statusCode: ${res.statusCode}`)
        console.log(res)
    })
    .catch((error) => {
        console.error(error)
    });