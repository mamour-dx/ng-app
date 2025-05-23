import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";


@Component({
  selector: 'app-root',
  // standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <h1>Welcome to my Angular application!</h1>
    <app-header></app-header> 
    <router-outlet />
  `,
  styles: [`
    h1 {
      color: darkblue;
    }
  `],
})
export class AppComponent {
  title = 'ng-app';
}