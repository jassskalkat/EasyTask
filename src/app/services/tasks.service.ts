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
}
