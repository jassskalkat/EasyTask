import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../models/user.interface';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() id: string = 'u1';
  @Input() name: string = 'user';
  @Input() avatar: string = 'user.jpg';
  @Input() isUserSelected: boolean = false;

  @Output() selectedUser: EventEmitter<User> = new EventEmitter<User>();

  sendSelectedUser(): void {
    this.selectedUser.emit(
      {
        id: this.id,
        name: this.name,
        avatar: this.avatar,
      }
    );
  }
}
