import { Document, Schema, model } from "mongoose";

export type TTodo = {
  title: string;
  description: string;
  done: boolean;
  archived: boolean;
};

export interface ITodo extends TTodo, Document {}

const todoSchema = new Schema<ITodo>(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    done: {
      type: Boolean,
    },
    archived: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  },
);

export const TodoModel = model("todos", todoSchema);
export default TodoModel;
