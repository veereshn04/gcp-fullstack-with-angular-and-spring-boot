import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo
  username: string

  constructor(
    private todoService: TodoDataService,
    private rout: ActivatedRoute,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.username = 'javahangout'
    this.id = this.rout.snapshot.params['id']
    this.todo = new Todo(this.id, this.username, '', false, new Date());
    if (this.id != -1) {
      this.todo = this.todoService.retrieveTodo('javahangout', this.id)
    }
  }

  saveTodo() {
    if (this.id == -1) {
      this.todoService.createTodo('javahangout', this.id, this.todo);
      this.router.navigate(['todos'])
    } else {
      this.todoService.updateTodo('javahangout', this.id, this.todo);
      this.router.navigate(['todos'])
    }
  }
  // putTodo() {
  //   this.http.put(`http://localhost:8080/users/${this.username}/todos/${this.id}`,this.todo).subscribe(
  //     response => {
  //       console.log(response)
  //     });
  // }

}
