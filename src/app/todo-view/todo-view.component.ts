import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

  todos: Todo[];
  selectedTodo: Todo;
  displayedColumns = ['id', 'title', 'completed', 'edit'];

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.service.getTodos().subscribe((response: Todo[]) => {
      console.log(response);
      this.todos = response;
    });
  }

  // onSelect(item): void {
  //   console.log(item);
  //   this.selectedTodo = item;
  // }

}
