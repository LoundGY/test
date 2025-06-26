import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  #users = signal<User[]>([]);
  readonly users = computed(() => this.#users());

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch(): void {
    this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        tap(u => this.#users.set(u)),
        catchError(err => throwError(() => err)),
      )
      .subscribe();
  }

  delete(id: number): void {
    this.#users.update(list => list.filter(u => u.id !== id));
  }

  byId(id: number): User | undefined {
    return this.#users().find(u => u.id === id);
  }
}
