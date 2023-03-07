import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs';
import { User } from '../user/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers$ = this.http.get<User[]>('http://localhost:5003/users').pipe(
    shareReplay(1)
  );

  constructor(
    private http: HttpClient
  ) { }
  
}
