import { Todo } from './../models/todo.type';
import { TodosService } from './../services/todos.service';
import { Component, inject, OnInit, signal} from '@angular/core';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([])
  

  
  ngOnInit(): void {
    this.todoService
    .getTodosFromApi()
    .pipe (
      catchError((err) => {
        throw err
      })
    )
    // this is critical
    .subscribe((todos: Todo[]) => {
      this.todoItems.set(todos);
    })
  }
}
