import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserDto, User } from 'src/generated-types';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private readonly httpClient: HttpClient) {}

  login(request: CreateUserDto) {
    return this.httpClient.post<User>('api/auth/login', request)
  }
}
