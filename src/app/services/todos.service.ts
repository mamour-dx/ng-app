import { Injectable } from '@angular/core';
import { Todo } from "../models/todo.type"

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItems : Array<Todo>  = [{
    title: 'groceries', 
    id: 0,
    userId: 1,
    completed: false
  }, {
    title: 'gym',
    id: 1,
    userId: 1,
    completed: true
  }
]
  constructor() { }
}
       