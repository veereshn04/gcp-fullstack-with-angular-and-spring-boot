import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public done: boolean,
    public targetDate: Date

  ) { }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message: string
  //   new Todo(1001,'Become an expert in Java', true, new Date() ),
  //   new Todo(1002,'Learn Angular Js', true, new Date() ),
  //   new Todo(1003,'Lear DevOps', true, new Date() ),
  //   new Todo(1004,'Lear Nodejs', true, new Date() )
  //   // {id : 1001,description : 'learn Angular Js'},
  //   // {id : 1002,description : 'Become as an expert in Angular Js'},
  //   // {id : 1003,description : 'Visit UK'},
  //   // {id : 1004,description : 'Visit US'}
  // ]

  // todo = {
  //   id : 1001,
  //   description : 'learn Angular Js'
  // }
  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }
  deleteTodo(id) {
    //console.log(`Delete Todo :  ${id}`)
    this.todoService.deleteTodo('javahangout', id);
    this.refreshTodos();
    this.message = `Delete of Todo ${id} Successful!`;
    
  }
updateTodo(id){
  console.log(`Updated ${id}`)
  this.router.navigate(['todos', id])
}
  refreshTodos(){
    this.todos = this.todoService.retrieveAllTodos('javahangout');
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }

}
