import {Component, Input} from '@angular/core';
import {Task} from '../../models/task.interface';
import {User} from '../../models/user.interface';
import {TaskComponent} from '../../components/task/task.component';
import {TasksService} from '../../services/tasks.service';
import {AddTaskComponent} from '../../components/add-task/add-task.component';

@Component({
  selector: 'app-tasks-list',
  imports: [
    TaskComponent,
    AddTaskComponent
  ],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {
  @Input() user: User = {
    id: '',
    name: '',
    avatar: ''
  };

  tasks: Task[] = new Array<Task>();
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {
    this.getAllTasks();
  }

  get userTasks(): Task[] {
    return this.tasks.filter((task: Task): boolean => task.userId === this.user.id);
  }

  getAllTasks(): void {
    this.tasksService.getAllTasks().subscribe((tasks: Task[]): void => {
      this.tasks = tasks;
    });
  }

  receiveCompletedTask(task: Task): void {
    this.tasksService.deleteTask(task.id).subscribe((): void => {
      this.getAllTasks();
    });
  }

  addTask(): void {
    this.isAddingTask = true;
  }

  receiveCancelAddingTask(isCancelAddingTask: boolean): void {
    this.isAddingTask = isCancelAddingTask;
  }

  receiveNewTask(task: Task): void {
    task.id = `t${Math.floor(Math.random() * 100)}`;
    task.userId = this.user.id;
    this.tasksService.createTask(task).subscribe((newTask: Task): void => {
      this.tasks.push(newTask);
    });
    this.isAddingTask = false;
  }
}
