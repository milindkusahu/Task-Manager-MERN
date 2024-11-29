const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

const PORT = 3000;

app.get("/hello", (req, res) => {
  res.send("Hello Bro");
});

app.use("/api/v1/tasks", tasks);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
