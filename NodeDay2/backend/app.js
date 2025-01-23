const express = require('express')
const app = express();
const cors = require('cors');


app.use(cors());

const port = 3000;
const apiVersion = "/api/v1"
const jokes = {
    "jokes": [
        {
            "id": 1,
            "joke": "Why don't scientists trust atoms?",
            "description": "Because they make up everything!"
        },
        {
            "id": 2,
            "joke": "What did the grape say when it got stepped on?",
            "description": "Nothing, it just let out a little wine!"
        },
        {
            "id": 3,
            "joke": "Why did the scarecrow win an award?",
            "description": "Because he was outstanding in his field!"
        },
        {
            "id": 4,
            "joke": "What do you call a bear with no teeth?",
            "description": "A gummy bear!"
        },
        {
            "id": 5,
            "joke": "Why don't eggs tell jokes?",
            "description": "They'd crack up!"
        },
        {
            "id": 6,
            "joke": "What do you call a fake noodle?",
            "description": "An impasta!"
        },
        {
            "id": 7,
            "joke": "Why did the math book look sad?",
            "description": "Because it had too many problems!"
        },
        {
            "id": 8,
            "joke": "What do you call a bear taking a nap?",
            "description": "A hibernapper!"
        },
        {
            "id": 9,
            "joke": "Why don't oysters donate to charity?",
            "description": "Because they're shellfish!"
        },
        {
            "id": 10,
            "joke": "What did one wall say to the other wall?",
            "description": "I'll meet you at the corner!"
        }
    ]
}

app.get(`${apiVersion}/jokes`, (_, res) => {
    res.send(
        jokes
    )
}

)

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}${apiVersion}/jokes`);
  });