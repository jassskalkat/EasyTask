import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../../models/task.interface';


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task: Task = {
    id: '',
    userId: '',
    title: '',
    summary: '',
    dueDate: ''
  };

  @Output() completedTask: EventEmitter<Task> = new EventEmitter<Task>();

  sendCompletedTask(): void {
    this.completedTask.emit(
      {
        id: this.task.id,
        userId: this.task.userId,
        title: this.task.title,
        summary: this.task.summary,
        dueDate: this.task.dueDate
      }
    );
  }
}
