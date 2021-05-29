import express from "express";
import props from "../settings/props.js";
import cors from "cors";
import Todos from "../models/Todos.js";

const app = express();
app.use(cors({ origin: true }), express.json());
const seq = props.sequelize;

// const check = props.seqAuth(seq);

app.get("/todo/list", (req, res) => {
  Todos.findAll().then((response) =>
    res.send({ error: null, response: response })
  );
});

app.get("/todo/list/find/:data", (req, res) => {
  Todos.findOne({
    where: { todo_title: JSON.parse(req.params.data) },
  }).then((response) => res.send({ response: response }));
});

app.post("/todo/add", (req, res) => {
  let detail = req.body.details;
  Todos.create(detail).then(() =>
    Todos.findAll().then((response) => res.send({ response: response }))
  );
});

app.put("/todo/edit", (req, res) => {
  let detail = req.body.details;
  let id = req.body.id;
  Todos.update(detail, {
    where: { todo_id: id },
  }).then((response) => res.send({ response }));
});

app.delete("/todo/delete/", (req, res) => {
  let id = req.body.id;
  Todos.destroy({
    where: { todo_id: id },
  }).then((response) => res.send({ response }));
});

app.listen(3001, () => {
  console.log("Servers start with 3001 port");
});
