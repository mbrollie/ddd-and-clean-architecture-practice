import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  users$ = this.userService.getUsers$.pipe(
    catchError(err => {
      console.log(err);
      return of([]);
    })
  );

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

}
