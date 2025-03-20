import express from "express";
import { mongoConnect } from "./database";
import TodoRouter from "./routes/todo.routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use("todos", TodoRouter);

mongoConnect();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
