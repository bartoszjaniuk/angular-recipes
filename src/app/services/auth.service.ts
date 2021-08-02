import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuth } from '../models/auth.model';

interface SignUpAuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;

  kind: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private webApiKey: string = 'AIzaSyBCKETBTRGfZMXPOIqY8yLu1ryOjb15SRo';
  private signInUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${this.webApiKey}
    `;
  private signUpUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.webApiKey}
 `;

  constructor(private http: HttpClient) {}

  signUp(userCredentials: IAuth) {
    return this.http.post<SignUpAuthResponseData>(this.signUpUrl, {
      ...userCredentials,
      returnSecureToken: true,
    });
  }
}
