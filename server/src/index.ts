import * as express from "express"
import * as path from "path"
import { randomNumber } from "./utils/random";

const app = express(); // create express app

// When you use the root route, return the index.html file from public folder.
app.use(express.static(path.join(__dirname, "../..", "build")));

app.post('/sessions', (req, res) => {
  res.send({
    session: randomNumber(5)
  })
})

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});