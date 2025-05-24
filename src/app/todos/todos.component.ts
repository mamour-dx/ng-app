import { NgIf } from '@angular/common';
import { Todo } from './../models/todo.type';
import { TodosService } from './../services/todos.service';
import { Component, inject, OnInit, signal} from '@angular/core';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
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
    // this is critical *
    .subscribe((todos: Todo[]) => {
      this.todoItems.set(todos);
    })
  }
  searchText = signal("")
  updateTodoItem(todoItems: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItems.id) {
          return {
            ...todo,
            completed: !todoItems.completed
          };
        }
        return todo;
      });
    });
  }
}
