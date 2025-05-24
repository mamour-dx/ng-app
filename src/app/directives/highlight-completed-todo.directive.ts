import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);
  el = inject(ElementRef) // ElementRef is the element in which we have applied this directive !

/* why input for isCompleted and inject for el ?
// input is used to pass data from parent component to directive -> whether the todo is completed or not (parent component)
 inject is used to get the reference of the element in which this directive is applied -> ElementRef comes from Angular core
 */
  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.color = 'gray'
      this.el.nativeElement.style.backgroundColor = 'lightgreen';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.color = 'black';
      this.el.nativeElement.backgroundColor = 'transparent';
    }
  })
}
