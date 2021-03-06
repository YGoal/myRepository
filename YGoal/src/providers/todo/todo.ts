import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoService {

  private todos = [];
  private archivedTodos = [];

  constructor(public http: Http) {
    console.log('Hello TodoService Provider');
  }

  archiveTodo(todoIndex){
    let todoToBeArchived = this.todos[todoIndex];
    this.todos.splice(todoIndex, 1);
    this.archivedTodos.push(todoToBeArchived);
  }

  editTodo(todoIndex){
    let todoToBeArchived = this.todos[todoIndex];
    this.todos.splice(todoIndex, 1);
    this.archivedTodos.push(todoToBeArchived);
  }

  getTodos(){
    return this.todos;
  }

  getArchivedTodos(){
    console.log('archivedTodos : '+ this.archivedTodos);
    return this.archivedTodos;
  }

  addTodo(todo){
    this.todos.push(todo);
  }

  modifyTodo(todo, index){
    this.todos[index] = todo;
  }

}
