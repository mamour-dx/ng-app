import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'
import { TodosService } from '../../services/todos.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: `./header.component.html`,
  styleUrl: `./header.component.scss`,
  providers: [TodosService]

})
export class HeaderComponent {

}
