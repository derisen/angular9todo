import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todo: Todo;

  constructor(private service: TodoService) { }

  ngOnInit(): void {
  }

  addTodo(todo): void {
    console.log(todo)
    this.service.addTodo(todo).subscribe(response => {
      console.log(response);
      // this.todos.push({id: response['id'], title: title.title, completed: false})
    })
 }

}
