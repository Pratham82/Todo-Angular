import { Component } from '@angular/core';
import Todo from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'New app';
  name = 'Prathamesh Mali';
  todoValue: string;
  list: Todo[];

  ngOnInit() {
    this.list = [];
    this.todoValue = '';
    console.log(this.list);
  }

  addItem() {
    if (this.todoValue !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false,
      };
      this.list.push(newTodo);
    }

    this.todoValue = '';
  }
  deleteIdtem(id: number) {
    this.list = this.list.filter((todo) => todo.id !== id);
  }
}
