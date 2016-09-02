import { Component } from '@angular/core';
import { TodoAppComponent } from './todo-app/todo-app.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [TodoAppComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
