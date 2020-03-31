import { Todo } from './todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTodos() { 
    return this.http.get<Todo[]>(this.url);
  }

  getTodo(id) { 
    return this.http.get<Todo>(this.url + '/' + id);
  }
  
  addTodo(todo) { 
    return this.http.post(this.url, JSON.stringify(todo));
  }

  deleteTodo(id) {
    return this.http.delete(this.url + '/' + id);
  }

  editTodo(todo) { 
    return this.http.put(this.url + '/' + todo.id, JSON.stringify(todo))
  }
}
