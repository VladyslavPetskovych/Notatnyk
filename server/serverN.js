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
const scheduleRouter = require('./routes/schedule')

app.use("/N4user", oneUsersRouter);
app.use("/N4users", usersRouter);
app.use('/N4schedule',scheduleRouter)

app.listen(port, () => {
  console.log(`Додаток запущено на ${port} порті`);
});
