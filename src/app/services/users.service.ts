import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.interface';
import {environment} from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private httpclient: HttpClient = inject(HttpClient);
  private apiURL: string = environment.API_URL + '/users';

  getAllUsers(): Observable<User[]> {
    return this.httpclient.get<User[]>(this.apiURL);
  }
}

