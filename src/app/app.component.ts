import { Component } from "@angular/core";
import { AppModel } from "./Model/app.model";

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
    return this.appModel.items;
  }
  trackByFn(index: number, item: any): number {
    return index;
  }
}
