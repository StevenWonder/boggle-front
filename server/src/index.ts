import * as axios from "axios"
import * as express from "express"
import * as path from "path"
import * as http from "http"
import { Server } from "socket.io"

import { addSession, findSession } from "./sessions";
import { Session } from "./types";
import { randomNumber } from "./utils/random";
import { generateGame } from "./utils/game";

const app = express(); // create express app
const server = http.createServer(app);
const io = new Server(server);

const VALIDATION_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en_US'

// Parse incoming JSON to an object
app.use(express.json())

// When you use the root route, return the index.html file from public folder.
app.use(express.static(path.join(__dirname, "../..", "build")));

io.on('connection', (socket) => {
  console.log(`${socket.id} connected`);
  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnected`);
  });

  socket.on('new game', (sessionId) => {
    console.log(`New game. sessionId: ${sessionId}`)
    const game = generateGame()
    io.emit('new game created', {
      game,
      sessionId
    })
  })
});

app.get('/sessions/:sessionId', (req, res) => {
  const sessionId = req.params.sessionId
  const session = findSession(sessionId)

  if (session === undefined) {
    res.status(404)
    res.send('Session not found')
    return
  }

  res.send('ok')
})

app.post('/sessions', (req, res) => {
  const sessionId = randomNumber(5)
  const newSession : Session = {
    game: [],
    id: sessionId
  }
  addSession(newSession)

  res.send({
    sessionId
  })
})

app.post('/words', async (req, res) => {
  let isValid = false
  try {
    const { word } = req.body
    if (word) {
      const lowercaseWord = word.toLowerCase()
      const result = await axios.default.get(`${VALIDATION_URL}/${lowercaseWord}`)
      const data : any[] = result.data
      if (data.length && data.length > 0 && data[0].word === lowercaseWord) {
        isValid = true
      }
    } 
  } catch (e) {
    // Handle error
  }
  res.send({
    isValid
  })
})

// start express server on port 5000
server.listen(5000, () => {
  console.log("server started on port 5000");
});