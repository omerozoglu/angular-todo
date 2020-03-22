import { TodoItem } from "../Model/todoitem.model";

export class AppModel {
  title: string;
  items: any[];
  constructor() {
    this.title = "Angular ToDo";
    this.items = [
      new TodoItem("Breakfast", true),
      new TodoItem("Jogging", false),
      new TodoItem("Go to GYM", false),
      new TodoItem("Go to mall", false),
      new TodoItem("Pay tax", false)
    ];
  }
}
