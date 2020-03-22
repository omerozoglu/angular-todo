import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "AngularToDo";
  items: any = [
    { description: "Breakfast", action: "No" },
    { description: "Jogging", action: "No" },
    { description: "Go to GYM", action: "No" },
    { description: "Go to Mall", action: "No" },
    { description: "Pay tax", action: "No" }
  ];
}
