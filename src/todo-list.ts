import TodoModel, { TTodo } from "./todo";

export async function listItems() {
  const result = await TodoModel.find();
  return result;
}
export async function createItem(todo: TTodo) {
  const addedTodo = new TodoModel(todo);
  return await addedTodo.save();
}
export async function updateItem(_id: string, todoChange: Partial<TTodo>) {
  const updateItem = await TodoModel.findByIdAndUpdate(
    { _id },
    {
      $set: todoChange,
    },
    {
      new: true,
    }
  );

  return updateItem;
}
export async function removeItem(_id: string) {
  await TodoModel.findByIdAndDelete({
    _id,
  });
}
