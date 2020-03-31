import { Router } from '@angular/router';
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

  constructor(private service: TodoService, private router: Router) { }

  ngOnInit(): void {
  }

  addTodo(todo): void {
    console.log(todo)
    this.service.addTodo(todo).subscribe(response => {
      this.router.navigate(['/']);
    })
 }

}
