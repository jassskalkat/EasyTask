import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.development';
import {Observable} from 'rxjs';
import {Task} from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private httpclient: HttpClient = inject(HttpClient);
  private apiURL: string = environment.API_URL + '/tasks';

  getAllTasks(): Observable<Task[]> {
    return this.httpclient.get<Task[]>(this.apiURL);
  }

  getTaskById(id: string): Observable<Task> {
    return this.httpclient.get<Task>(`${this.apiURL}/${id}`);
  }

  createTask(task: Task): Observable<Task> {
    return this.httpclient.post<Task>(this.apiURL, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.httpclient.put<Task>(`${this.apiURL}/${task.id}`, task);
  }

  deleteTask(id: string): Observable<Task> {
    return this.httpclient.delete<Task>(`${this.apiURL}/${id}`);
  }
}
