require('./db')

const express = require("express");
const app = express();
const port = 3004;

const userRouter = require("./routes/user");

app.use('/user', userRouter)

app.get("/", (req, res) => {
  res.send("кореневий шлях нотатника");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
