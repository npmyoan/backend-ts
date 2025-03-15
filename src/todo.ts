import { Document, Schema, model } from "mongoose";

export type TTodo = {
  title: string;
  description: string;
  done: boolean;
};

export interface ITodo extends TTodo, Document {}

const todoSchema = new Schema<ITodo>({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  done: {
    type: Boolean,
  },
});

export const TodoModel = model("todos", todoSchema);
export default TodoModel;
