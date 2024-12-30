import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Task} from '../../models/task.interface';

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
  @Output() newTask: EventEmitter<Task> = new EventEmitter<Task>();

  task: Task = {
    id: '',
    userId: '',
    title: '',
    summary: '',
    dueDate: ''
  };

  // taskTitle: string = '';
  // taskSummary: string = '';
  // taskDueDate: string = '';

  constructor() {
    this.task = new Task();
  }

  sendCancelAddingTask(): void {
    this.cancelAddingTask.emit(false);
  }

  sendNewTask(): void {
    this.newTask.emit(this.task);
  }

}
