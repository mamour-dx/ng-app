import { Component, Output, signal } from '@angular/core';
import { CounterComponent } from '../components/counter/counter.component'
import { GreetingComponent } from '../components/greeting/greeting.component'

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  title = signal("Hello from Home!")
  message = signal("wassup")

  keyUpHandler(event: KeyboardEvent) {
    console.log(`${event.key}`);
  }
}
