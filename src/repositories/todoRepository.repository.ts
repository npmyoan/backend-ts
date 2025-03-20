import TodoModel from "../schemas/todo.schema";
interface CreateTodoDTO {
  title: string;
  description: string;
  done: boolean;
}
class TodoRepository {
  async findAll() {
    const result = await TodoModel.find({ archived: false });
    return result;
  }
  async findById(_id: string) {
    const result = await TodoModel.findOne({ _id, archived: false });
    return result;
  }
  async create(todo: CreateTodoDTO) {
    const addedTodo = new TodoModel(todo);
    return await addedTodo.save();
  }
  async update(_id: string, todoChange: Partial<CreateTodoDTO>) {
    const updateItem = await TodoModel.findByIdAndUpdate(
      { _id },
      {
        $set: todoChange,
      },
      {
        new: true,
      },
    );

    return updateItem;
  }
  async delete(_id: string) {
    await TodoModel.findByIdAndUpdate(_id, {
      archived: true,
    });
  }
}

const todoRepository = new TodoRepository();

export default todoRepository;
