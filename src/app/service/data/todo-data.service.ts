import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  todos: Todo[]
  todo: Todo
  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username) {
    this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`).subscribe(
      response => this.todos = response,
      error => console.log(error));

    return this.todos;
  }

  deleteTodo(username, id) {
    this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`).subscribe(
      response => {
        console.log(response)
      });
  }
 
  retrieveTodo(username, id) {
    this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`).subscribe(
      response => {
        this.todo = new Todo(1,'','',false, new Date())
        this.todo=response;
        console.log('retrieveTodo : '+this.todo)
      });
      return this.todo;
  }

  updateTodo(username, id, todo) {
    this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,todo).subscribe(
      response => {
        console.log('put-->> '+response)
      });
  }

  createTodo(username, id, todo) {
    this.http.post(`http://localhost:8080/users/${username}/todos`,todo).subscribe(
      response => {
        console.log('put-->> '+response)
      });
  }


  handleSuccessfulResponse(response) {
    this.todos = response
  }
  handleErrorResponse(error) {
    console.log(error)
  }
}
