import express from "express";
const route = express.Router();

import { addTodo, getAllTodos, toggleTodoDone, updateTodo, deleteTodo } from "../controller/todoController.js";

route.post('/todos', addTodo);
route.get('/todos', getAllTodos);
route.get('/todos/:id', toggleTodoDone);
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);

export default route;