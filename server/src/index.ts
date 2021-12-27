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

// start express server on port 5000
server.listen(5000, () => {
  console.log("server started on port 5000");
});