import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-task',
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  @Output() cancelAddingTask: EventEmitter<boolean> = new EventEmitter<boolean>();

  sendCancelAddingTask(): void {
    this.cancelAddingTask.emit(false);
  }
}
