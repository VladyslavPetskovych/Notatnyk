require("./db");

const express = require("express");
const app = express();
const port = 3004;

app.get("/", (req, res) => {
  res.send("кореневий шлях нотатника");
});

const userRouter = require("./routes/usersRoute");

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Додаток запущено на ${port} порті`);
});
