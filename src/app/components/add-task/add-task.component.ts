import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from '../../models/task.interface';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [
    FormsModule
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  @Output() cancelAddingTask: EventEmitter<boolean> = new EventEmitter<boolean>();

  task: Task = {
    id: '',
    userId: '',
    title: '',
    summary: '',
    dueDate: ''
  };

  constructor() {
    this.task = new Task();
  }

  sendCancelAddingTask(): void {
    this.cancelAddingTask.emit(false);
  }
}
