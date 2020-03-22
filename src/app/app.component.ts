import { Component } from "@angular/core";
import { AppModel } from "./Model/app.model";
import { isNgTemplate } from "@angular/compiler";
import { empty } from "rxjs";
import { TodoItem } from "./Model/todoitem.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  appModel: AppModel = new AppModel();
  isDisplay = false;

  getTitle() {
    return this.appModel.title;
  }

  getTodoItems() {
    if (this.isDisplay) {
      return this.appModel.items;
    }
    return this.appModel.items.filter(i => !i.action);
  }

  addItem(value) {
    if (value != "") {
      this.appModel.items.push(new TodoItem(value, false));
    }
  }

  trackByFn(index: number, item: any): number {
    return index;
  }
}
