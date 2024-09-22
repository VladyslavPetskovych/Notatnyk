require("./db");

const express = require("express");
const app = express();
app.use(express.json());



const port = 3004;

app.get("/", (req, res) => {
  res.send("кореневий шлях нотатника");
});

const oneUsersRouter = require("./routes/oneUserRoute");
const usersRouter = require("./routes/usersRoute");

app.use("/user", oneUsersRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Додаток запущено на ${port} порті`);
});
