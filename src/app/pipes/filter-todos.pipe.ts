import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.type';

@Pipe({
  name: 'filterTodos',
  standalone: true
})
export class FilterTodosPipe implements PipeTransform {


  transform(todo: Todo[], searchText: string): Todo[] {
    if (!searchText) {
      return todo;
    }
    const text = searchText.toLowerCase()
    return todo.filter(todo => {
      return todo.title.toLowerCase().includes(text)
    })
  }

}
