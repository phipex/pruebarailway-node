var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.post('/poker/validation', function (req, res) {
    const response = {

        "winnerHand": "hand1",
        "winnerHandType": "HighCard",
        "compositionWinnerHand": ["As"]
      };
    res.send(response)
})

app.listen(8080)