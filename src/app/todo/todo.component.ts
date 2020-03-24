import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: any;

  constructor(private service: TodoService) {
   }

  ngOnInit(): void {
    this.service.getTasks().subscribe(response => {
        this.todos = response;
      });
  }

}
