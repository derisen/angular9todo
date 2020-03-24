import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = '';

  constructor(private http: HttpClient) { }

  getTasks() { 
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getTask() { }
  
  addTask() { }

  deleteTask() { }

  editTask() { }
}
