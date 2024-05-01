// write basic express boilerplate code,
// with express.json() middleware

const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//validations
app.post("/todos", async function (req, res) {
  const createPayLoad = req.body;
  const parsePayLoad = createTodo.safeParse(createPayLoad);
  if (!parsePayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }

  //put in MongoDb
  await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });

});




app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayLoad = req.body;
  const parsePayLoad = updatePayLoad.safeParse(updatePayLoad);
  if (!parsePayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(3000);
