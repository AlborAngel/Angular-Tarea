import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  constructor() {
    this.todos = [];
  }
  
  addTodo() {
    if (this.newTodo !== '') {
      const todo = new Todo(this.newTodo);
      this.todos.push(todo);
      this.newTodo = '';
    }
  }

  toggleComplete(todo: Todo) {
    todo.completed = !todo.completed;
  }

  removeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
