import {Component} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {UsersListComponent} from './pages/users-list/users-list.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-project-1';
}
