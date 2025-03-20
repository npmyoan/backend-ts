import { Request, Response } from "express";
import TodoService from "../services/todo.service";
class TodoController {
  async get(req: Request, res: Response) {
    try {
      const todos = TodoService.getAll();
      res.status(200).json({ data: todos });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  async create(req: Request, res: Response) {
    try {
      const { title, description, done } = req.body;
      const newTodo = await TodoService.create({
        title,
        description,
        done,
      });
      res.status(200).json({ data: newTodo });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, description, done } = req.body;

      const todo = await TodoService.update(id, {
        description,
        title,
        done,
      });
      res.status(200).json({ data: todo });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await TodoService.remove(id);
      res.status(200).json({ data: "ok" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

const todoController = new TodoController();

export default todoController;
