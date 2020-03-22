import { Component } from "@angular/core";
import { AppModel } from "./Model/app.model";
import { isNgTemplate } from "@angular/compiler";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  appModel: AppModel = new AppModel();
  getTitle() {
    return this.appModel.title;
  }
  getTodoItems() {
    return this.appModel.items.filter(i => !i.action);
  }
  trackByFn(index: number, item: any): number {
    return index;
  }
}
