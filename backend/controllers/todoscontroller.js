const Todo = require('../models/todomodel');
const asyncHanlder = require('express-async-handler');

const getTodos = asyncHanlder(async (req, res) => {
  const todos = await Todo.find({ user: req.user.id });
  res.status(200).json(todos)
});

const setTodos = asyncHanlder(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add text field');
  }
  const todo = await Todo.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(todo);
})

const updateTodos = asyncHanlder(async (req, res) => {
  const User = require("../models/userModel");
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error('Todo not found');
  }

  if (todo.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTodo);
})
  
const deleteTodos = asyncHanlder(async (req, res) => {

  const User = require("../models/userModel");
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error('Todo not found');
  }

  if (todo.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await todo.remove();

  res.status(200).json({ id: req.params.id });
})
  
  module.exports = {
    getTodos,
    setTodos,
    updateTodos,
    deleteTodos
  }

  