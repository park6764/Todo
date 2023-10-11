import { Component } from '@angular/core';
import { Todo } from './app.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todos: Todo[] = [
    { id: 1, title: 'first', content: 'test', completed: false, addedDate: '' }
  ];
  
  title = "";
  content = "";
  completed = false;

  add() {

  }

  comp(id: number) {
    // this.todos?
  }

  del() {

  }

}
