import {Component} from '@angular/core';
import {UserComponent} from '../../components/user/user.component';
import {User} from '../../models/user.interface';
import {TasksListComponent} from '../tasks-list/tasks-list.component';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-users-list',
  imports: [
    UserComponent,
    TasksListComponent,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  users: User[] = new Array<User>();

  selectedUser: User = {
    id: '',
    name: '',
    avatar: ''
  }

  constructor(private usersService: UsersService) {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.usersService.getAllUsers().subscribe((users: User[]): void => {
      this.users = users;
    });
  }

  receiveSelectedUser(user: User): void {
    this.selectedUser = user;
  }
}
