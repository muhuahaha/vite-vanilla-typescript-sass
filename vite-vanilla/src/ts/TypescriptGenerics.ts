// let id: number = 0;
// let todoList: any = [];
// function printTodos(): void {
//   console.log(todoList);
// }
// function addTodo<T, S>(item: T, status: S): void {
//   todoList.push({ taskId: id++, task: item, done: status });
// }
// addTodo<string, boolean>("Learn TypeScript", true);
// addTodo<number, boolean>(22, true);
// printTodos();

export const result = "";
export const result1 = "";
export const result2 = "";

let id: number = 0;
type TodoListItem = {
  taskId: number;
  task: string;
  done: boolean;
};
class Todo<Type> {
  _todoList: Array<Type> = [];
  addTodo(item: Type): void {
    this._todoList.push(item);
  }
  printTodos(): void {
    console.log(this._todoList);
  }
}
const Todos = new Todo<TodoListItem>();
Todos.addTodo({ taskId: id++, task: "learn TypeScript", done: true });
Todos.addTodo({ taskId: id++, task: "Practice TypeScript", done: false });
Todos.printTodos();
