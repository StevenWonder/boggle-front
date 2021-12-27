import * as express from "express"
import * as path from "path"

import { addSession, findSession } from "./sessions";
import { Session } from "./types";
import { randomNumber } from "./utils/random";

const app = express(); // create express app

// When you use the root route, return the index.html file from public folder.
app.use(express.static(path.join(__dirname, "../..", "build")));

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
    games: [],
    id: sessionId
  }
  addSession(newSession)

  res.send({
    sessionId
  })
})

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});