import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../components/mosh/services/app-error';
import { BadInput } from '../components/mosh/services/bad-input';
import { NotFoundError } from '../components/mosh/services/not-found-error';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials) {
    return this.http.post('/api/authenticate', credentials)
      .pipe(
        catchError(this.handleError),
        map((response: any) => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            return true;
          }
          return false;
        })
      );
  }

  logout() {
    console.log('Logging out...');
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');

    if (!token) { return false; }

    const isExpired = jwtHelper.isTokenExpired(token);
    return !isExpired;
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) { return null; }

    return new JwtHelperService().decodeToken(token);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error));
    }

    if (error.status === 404) {
      return throwError(new NotFoundError());
    }

    return throwError(new AppError(error));
  }
}
