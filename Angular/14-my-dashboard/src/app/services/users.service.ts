import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '@interfaces/request-response.interface';
import { Observable, delay, map } from 'rxjs';


interface State {
  users: User[];
  loading: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject( HttpClient );

  private state = signal<State>({
    loading: true,
    users: [],
  });

  public users = computed( () => this.state().users );
  public loading = computed( () => this.state().loading );

  constructor() {
    this.http.get<UsersResponse>('https://reqres.in/api/users')
      .pipe( delay(1500) )
      .subscribe( res => {
        this.state.set({
          loading: false,
          users: res.data,
        })
      })
  }

  getUserById( id: string ): Observable<User> {
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${ id }`)
      .pipe(
        map( res => res.data )
      )
  }
}
