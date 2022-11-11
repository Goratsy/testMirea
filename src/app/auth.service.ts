import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean;

  getAuthStatus(): Observable<boolean> {
    return of(this.isAuth);
  }

  setAuthStatus(value: boolean) {
    this.isAuth = value;
  }
}
